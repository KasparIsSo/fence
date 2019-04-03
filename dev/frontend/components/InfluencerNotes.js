import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled from "styled-components";

import TYPE from "./styles/Typography";

import InfluencerNote from "./InfluencerNote";

const LoggedNotesWrapper = styled.div`
  grid-column: 5 /13;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LoggedNotesHeader = styled.h2`
  ${TYPE.displaySmall.feature.ink}
  grid-column: span 2;
`;

const LOGGED_NOTES_QUERY = gql`
  query SINGLE_INFLUENCER_NOTES_QUERY($id: ID!) {
    notes(where: { influencer: { id: $id } }) {
      content
      isShown
      updatedAt
    }
  }
`;

class InfluencerLoggedNotes extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired
  };
  render() {
    const { influencer } = this.props;
    return (
      <LoggedNotesWrapper>
        <LoggedNotesHeader>Notes</LoggedNotesHeader>
        <Query query={LOGGED_NOTES_QUERY} variables={{ id: influencer.id }}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <>
                {data.notes.map(note => (
                  <InfluencerNote note={note} key={note.updatedAt} />
                ))}
              </>
            );
          }}
        </Query>
      </LoggedNotesWrapper>
    );
  }
}

export default InfluencerLoggedNotes;
