import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled from "styled-components";

import TYPE from "./styles/Typography";
import { BREAKPOINTS } from "./styles/Layout";

import InfluencerLoggedActivity from "./InfluencerLoggedActivity";

const LoggedActivitiesWrapper = styled.div`
  grid-column: 5 /13;
  height: min-content;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const LoggedActivitiesHeader = styled.h2`
  ${TYPE.displaySmall.feature.ink}
`;

const LOGGED_ACTIVITIES_QUERY = gql`
  query SINGLE_INFLUENCER_LOGGED_ACTIVITIES_QUERY($id: ID!) {
    loggedActivities(where: { influencer: { id: $id } }) {
      eventType
      description
      updatedAt
    }
  }
`;

class InfluencerLoggedActivities extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired
  };
  render() {
    const { influencer } = this.props;
    return (
      <LoggedActivitiesWrapper>
        <LoggedActivitiesHeader>Logged Activity</LoggedActivitiesHeader>
        <Query
          query={LOGGED_ACTIVITIES_QUERY}
          variables={{ id: influencer.id }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <>
                {data.loggedActivities.map(loggedActivity => (
                  <InfluencerLoggedActivity
                    loggedActivity={loggedActivity}
                    key={loggedActivity.updatedAt}
                  />
                ))}
              </>
            );
          }}
        </Query>
      </LoggedActivitiesWrapper>
    );
  }
}

export default InfluencerLoggedActivities;
