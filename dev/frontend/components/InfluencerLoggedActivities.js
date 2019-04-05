import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled from "styled-components";

import { toRem } from "./utils/unitConversion";
import TYPE from "./styles/Typography";
import { BREAKPOINTS } from "./styles/Layout";

import InfluencerLoggedActivity from "./InfluencerLoggedActivity";
import Button from "./Button";

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
  display: inline-block;
  margin-top: 0;
`;

const LoggedActivitiesEmpty = styled.p`
  ${TYPE.body.primary.subdued}
  font-style: italic;
  display: block;
  text-align: center;
`;

const AddLoggedActivityButton = styled(Button)`
  margin: 0;
  margin-top: ${toRem(5)};
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
        <AddLoggedActivityButton
          float="right"
          buttonType="primary"
          onClick={this.props.showModal}
        >
          +Log an Activity
        </AddLoggedActivityButton>
        <Query
          query={LOGGED_ACTIVITIES_QUERY}
          variables={{ id: influencer.id }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            if (data.loggedActivities.length == 0) {
              return (
                <LoggedActivitiesEmpty>
                  No logged events yet.
                </LoggedActivitiesEmpty>
              );
            }
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
