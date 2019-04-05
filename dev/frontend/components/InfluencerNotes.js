import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled from "styled-components";

import TYPE from "./styles/Typography";
import { BREAKPOINTS } from "./styles/Layout";

import InfluencerNote from "./InfluencerNote";

const NotesWrapper = styled.div`
  grid-column: 5 /13;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
    display: block;
  }
`;

const NotesHeader = styled.h2`
  ${TYPE.displaySmall.feature.ink}
  grid-column: span 2;
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    /* grid-column: span 4; */
  }
`;

const NotesEmpty = styled.p`
  ${TYPE.body.primary.subdued}
  font-style: italic;
  display: block;
  text-align: center;
  grid-column: span 2;
`;

const NOTES_QUERY = gql`
  query SINGLE_INFLUENCER_NOTES_QUERY($id: ID!) {
    notes(where: { influencer: { id: $id } }) {
      content
      isShown
      updatedAt
    }
  }
`;

class InfluencerNotes extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired
  };
  render() {
    const { influencer } = this.props;
    return (
      <NotesWrapper>
        <NotesHeader>Notes</NotesHeader>
        <Query query={NOTES_QUERY} variables={{ id: influencer.id }}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            if (data.notes.length == 0) {
              return <NotesEmpty>No notes yet.</NotesEmpty>;
            }
            return (
              <>
                {data.notes.map(note => (
                  <InfluencerNote note={note} key={note.updatedAt} />
                ))}
              </>
            );
          }}
        </Query>
      </NotesWrapper>
    );
  }
}

export default InfluencerNotes;
