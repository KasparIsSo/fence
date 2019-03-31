import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import { GRID, BREAKPOINTS } from "./styles/Layout";
import TYPE from "./styles/Typography";

import ContentWrapper from "./ContentWrapper";
import InfluencerSnapshotCard from "./InfluencerSnapshotCard";
import Button from "./Button";
import AddInfluencerModal from "./modals/AddInfluencer";

const InfluencersContainer = styled.div`
  ${GRID.container};
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
`;

const ALL_INFLUENCERS_QUERY = gql`
  query ALL_INFLUENCERS_QUERY {
    influencers {
      id
      firstName
      lastName
      phone
      description
      thumbnail
      image
      activeCampaigns
      pastCampaigns
    }
  }
`;

class Influencers extends Component {
  state = {
    showAddInfluencerModal: false
  };

  showModal = () => {
    this.setState({ showAddInfluencerModal: true });
  };

  render() {
    return (
      <>
        <AddInfluencerModal show={this.state.showAddInfluencerModal} />
        <ContentWrapper>
          <InfluencersContainer>
            <InfluencersHeader>
              <InfluencersTitle>Influencers</InfluencersTitle>
              <Button
                buttonType="primary"
                float="right"
                onClick={this.showModal}
              >
                +Add a New Influencer
              </Button>
            </InfluencersHeader>
            <Query query={ALL_INFLUENCERS_QUERY}>
              {({ data, error, loading }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
                return (
                  <>
                    {data.influencers.map(influencer => (
                      <InfluencerSnapshotCard
                        influencer={influencer}
                        key={influencer.id}
                      />
                    ))}
                  </>
                );
              }}
            </Query>
          </InfluencersContainer>
        </ContentWrapper>
      </>
    );
  }
}

export default Influencers;
export { ALL_INFLUENCERS_QUERY };
