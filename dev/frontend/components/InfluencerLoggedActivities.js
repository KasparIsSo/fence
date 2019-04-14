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

  > div:last-of-type {
    border-bottom: ${toRem(1)} solid ${props => props.theme.color.gray.ink};
  }

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
  margin-bottom: ${toRem(30)};
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    display: block;
    margin-bottom: ${toRem(20)};
  }
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
  margin-bottom: ${toRem(20)};
  float: right;
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    float: none;
    display: 0;
    margin: 0;
    margin-bottom: ${toRem(20)};
  }
`;

const SeeMore = styled.a`
  ${TYPE.body.primary.ink};
  font-weight: 700;
  color: ${props => props.theme.color.green.feature};
  /* grid-column: span 2; */
  display: block;
  text-align: center;
  cursor: pointer;
`;

const LOGGED_ACTIVITIES_QUERY = gql`
  query SINGLE_INFLUENCER_LOGGED_ACTIVITIES_QUERY($id: ID!, $cursor: String) {
    loggedActivitiesConnection(
      first: 10
      after: $cursor
      where: { influencer: { id: $id } }
      orderBy: updatedAt_DESC
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          eventType
          description
          updatedAt
        }
      }
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
          buttonType="primary"
          onClick={this.props.showModal}
        >
          + Log an Activity
        </AddLoggedActivityButton>
        <Query
          query={LOGGED_ACTIVITIES_QUERY}
          variables={{ id: influencer.id }}
        >
          {({ data, error, loading, fetchMore }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            const loggedActivitiesConnection = data.loggedActivitiesConnection;
            if (loggedActivitiesConnection.edges.length == 0) {
              return (
                <LoggedActivitiesEmpty>
                  No logged events yet.
                </LoggedActivitiesEmpty>
              );
            }
            return (
              <>
                {loggedActivitiesConnection.edges.map(loggedActivity => (
                  <InfluencerLoggedActivity
                    loggedActivity={loggedActivity.node}
                    key={loggedActivity.node.updatedAt}
                  />
                ))}
                {loggedActivitiesConnection.pageInfo.hasNextPage ? (
                  <SeeMore
                    onClick={() => {
                      fetchMore({
                        variables: {
                          cursor: loggedActivitiesConnection.pageInfo.endCursor
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                          const newEdges =
                            fetchMoreResult.loggedActivitiesConnection.edges;
                          const pageInfo =
                            fetchMoreResult.loggedActivitiesConnection.pageInfo;

                          return newEdges.length
                            ? {
                                loggedActivitiesConnection: {
                                  __typename:
                                    previousResult.loggedActivitiesConnection
                                      .__typename,
                                  edges: [
                                    ...previousResult.loggedActivitiesConnection
                                      .edges,
                                    ...newEdges
                                  ],
                                  pageInfo
                                }
                              }
                            : previousResult;
                        }
                      });
                    }}
                  >
                    See More
                  </SeeMore>
                ) : null}
              </>
            );
          }}
        </Query>
      </LoggedActivitiesWrapper>
    );
  }
}

export default InfluencerLoggedActivities;
export { LOGGED_ACTIVITIES_QUERY };
