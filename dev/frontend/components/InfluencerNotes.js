import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled from "styled-components";

import { toRem } from "./utils/unitConversion";
import TYPE from "./styles/Typography";
import { BREAKPOINTS } from "./styles/Layout";

import InfluencerNote from "./InfluencerNote";
import Button from "./Button";

const NotesWrapper = styled.div`
  grid-column: 5 /13;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
    display: block;
  }
`;

const NotesHeaderWrapper = styled.div`
  grid-column: span 2;
  margin-bottom: calc(${toRem(30)} - 1.5rem);
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    margin-bottom: 0;
  }
`;

const NotesHeader = styled.h2`
  ${TYPE.displaySmall.feature.ink};
  display: inline-block;
  margin-top: 0;
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    display: block;
    margin-bottom: ${toRem(20)};
  }
`;

const NotesEmpty = styled.p`
  ${TYPE.body.primary.subdued}
  font-style: italic;
  display: block;
  text-align: center;
  grid-column: span 2;
`;

const AddNoteButton = styled(Button)`
  margin: 0;
  margin-top: ${toRem(5)};
  float: right;
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    float: none;
    margin: 0;
    margin-bottom: ${toRem(20)};
  }
`;

const NOTES_QUERY = gql`
  query SINGLE_INFLUENCER_NOTES_QUERY($id: ID!) {
    notes(where: { influencer: { id: $id } }, orderBy: updatedAt_DESC) {
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
        <NotesHeaderWrapper>
          <NotesHeader>Notes</NotesHeader>
          <AddNoteButton buttonType="primary" onClick={this.props.showModal}>
            + Add a Note
          </AddNoteButton>
        </NotesHeaderWrapper>
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
