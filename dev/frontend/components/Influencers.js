import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";

import { toRem } from "./utils/unitConversion";
import { GRID, BREAKPOINTS } from "./styles/Layout";
import TYPE from "./styles/Typography";

import User from "./User";
import ContentWrapper from "./ContentWrapper";
import InfluencerSnapshotCard from "./InfluencerSnapshotCard";
import Button from "./Button";
import AddInfluencerModal from "./modals/AddInfluencer";

const InfluencersContainer = styled.div`
  ${GRID.container};
  grid-gap: 1.5rem;
  padding: ${toRem(40)} 0;

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    display: block;
  }
`;

const InfluencersHeader = styled.div`
  grid-column: span 12;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const InfluencersTitle = styled.h1`
  ${TYPE.displaySmall.feature.ink}
  display: inline-block;
  margin-top: 0;
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    display: block;
    margin-bottom: ${toRem(20)};
  }
`;

const AddInfluencerButton = styled(Button)`
  margin: 0;
  margin-top: ${toRem(5)};
  float: right;
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    float: none;
    margin: 0;
    margin-bottom: ${toRem(20)};
  }
`;

const InfluencersEmpty = styled.p`
  ${TYPE.body.primary.subdued}
  font-style: italic;
  display: block;
  text-align: center;
  padding-top: ${toRem(60)};
  cursor: pointer;
  grid-column: span 12;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const SeeMore = styled.a`
  ${TYPE.body.primary.ink};
  font-weight: 700;
  color: ${props => props.theme.color.green.feature};
  display: block;
  text-align: center;
  cursor: pointer;
  padding-top: ${toRem(10)};
  grid-column: span 12;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const ALL_INFLUENCERS_QUERY = gql`
  query ALL_INFLUENCERS_QUERY($id: ID!, $cursor: String) {
    influencersConnection(
      first: 9
      after: $cursor
      where: { user: { id: $id } }
      orderBy: updatedAt_DESC
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          firstName
          lastName
          phone
          description
          thumbnail
          image
          updatedAt
          activeCampaigns
          pastCampaigns
        }
      }
    }
  }
`;

class Influencers extends Component {
  state = {
    showAddInfluencerModal: false,
    loggedIn: false
  };

  showModal = () => {
    this.setState({ showAddInfluencerModal: true });
    document.querySelector("body").classList.toggle("modalOpen");
  };

  componentDidMount() {
    if (!this.state.loggedIn) {
      console.log("false");
      console.log(this.state);
      // Router.push({
      //   pathname: "/"
      // });
    }
  }

  render() {
    return (
      <User>
        {({ data: { loggedInUser } }) => (
          <>
            <AddInfluencerModal
              show={this.state.showAddInfluencerModal}
              userId={loggedInUser ? loggedInUser.id : null}
            />
            <ContentWrapper>
              <InfluencersContainer>
                <InfluencersHeader>
                  <InfluencersTitle>Influencers</InfluencersTitle>
                  <AddInfluencerButton
                    buttonType="primary"
                    onClick={this.showModal}
                  >
                    + Add a New Influencer
                  </AddInfluencerButton>
                </InfluencersHeader>
                {loggedInUser && (
                  <Query
                    query={ALL_INFLUENCERS_QUERY}
                    variables={{ id: loggedInUser.id }}
                  >
                    {({ data, error, loading, fetchMore }) => {
                      if (loading) return <p>Loading...</p>;
                      if (error) return <p>Error: {error.message}</p>;
                      const influencersConnection = data.influencersConnection;
                      if (influencersConnection.edges.length == 0) {
                        return (
                          <InfluencersEmpty>
                            No influencers added yet.
                          </InfluencersEmpty>
                        );
                      }
                      return (
                        <>
                          {influencersConnection.edges.map(influencer => (
                            <InfluencerSnapshotCard
                              influencer={influencer.node}
                              key={influencer.node.id}
                            />
                          ))}
                          {influencersConnection.pageInfo.hasNextPage ? (
                            <SeeMore
                              onClick={() => {
                                fetchMore({
                                  variables: {
                                    cursor:
                                      influencersConnection.pageInfo.endCursor
                                  },
                                  updateQuery: (
                                    previousResult,
                                    { fetchMoreResult }
                                  ) => {
                                    const newEdges =
                                      fetchMoreResult.influencersConnection
                                        .edges;
                                    const pageInfo =
                                      fetchMoreResult.influencersConnection
                                        .pageInfo;

                                    return newEdges.length
                                      ? {
                                          influencersConnection: {
                                            __typename:
                                              previousResult
                                                .influencersConnection
                                                .__typename,
                                            edges: [
                                              ...previousResult
                                                .influencersConnection.edges,
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
                )}
              </InfluencersContainer>
            </ContentWrapper>
          </>
        )}
      </User>
    );
  }
}

export default Influencers;
export { ALL_INFLUENCERS_QUERY };
