import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import { GRID, BREAKPOINTS } from "./styles/Layout";
import TYPE from "./styles/Typography";

import ContentWrapper from "./ContentWrapper";
import Influencer from "./Influencer";
import Button from "./Button";
import AddInfluencerModal from "./modals/AddInfluencer";

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

const InfluencerContainer = styled.div`
  ${GRID.container};
`;

const InfluencerHeader = styled.div`
  grid-column: span 12;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const InfluencerTitle = styled.h1`
  ${TYPE.displaySmall.feature.ink}
  display: inline-block;
`;

class Influencers extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      showAddInfluencerModal: false
    };
  }

  showModal = () => {
    this.setState({ showAddInfluencerModal: true });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <AddInfluencerModal show={this.state.showAddInfluencerModal} />
        <ContentWrapper>
          <InfluencerContainer>
            <InfluencerHeader>
              <InfluencerTitle>Influencers</InfluencerTitle>
              <Button
                buttonType="primary"
                float="right"
                // onClick={() => this.setState({ modalShow: true })}
                asdadsd="sadafafs"
                handleClick={this.showModal}
              >
                +Add a New Influencer
              </Button>
            </InfluencerHeader>
            <Query query={ALL_INFLUENCERS_QUERY}>
              {({ data, error, loading }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
                return (
                  <>
                    {data.influencers.map(influencer => (
                      <Influencer influencer={influencer} key={influencer.id} />
                    ))}
                  </>
                );
              }}
            </Query>
          </InfluencerContainer>
        </ContentWrapper>
      </>
    );
  }
}

export default Influencers;
