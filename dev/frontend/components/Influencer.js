import React, { Component } from "react";
import { Query } from "react-apollo";
import Head from "next/head";
import Router from "next/router";
import gql from "graphql-tag";
import styled from "styled-components";

import { toRem } from "./utils/unitConversion";
import { GRID, BREAKPOINTS } from "./styles/Layout";
import TYPE from "./styles/Typography";

import Error from "./ErrorMessage";

import ContentWrapper from "./ContentWrapper";
import Button from "./Button";
import InfluencerCard from "./InfluencerCard";
import InfluencerLoggedActivities from "./InfluencerLoggedActivities";
import InfluencerNotes from "./InfluencerNotes";
import AddLoggedActivityModal from "./modals/AddLoggedActivity";

const InfluencerContainer = styled.div`
  ${GRID.container};
  grid-row-gap: ${toRem(40)};
`;

const InfluencerHeader = styled.div`
  grid-column: span 12;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }

  > .backButton {
    display: block;
    margin: 0;
  }
`;

const SINGLE_INFLUENCER_QUERY = gql`
  query SINGLE_INFLUENCER_QUERY($id: ID!) {
    influencer(where: { id: $id }) {
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

class Influencer extends Component {
  state = {
    showAddLoggedActivityModal: false
  };

  showModal = () => {
    this.setState({ showAddLoggedActivityModal: true });
    document.querySelector("body").classList.toggle("modalOpen");
  };

  render() {
    return (
      <>
        <AddLoggedActivityModal show={this.state.showAddLoggedActivityModal} />
        <ContentWrapper>
          <InfluencerContainer>
            <InfluencerHeader>
              <Button
                className="backButton"
                buttonType="outline"
                onClick={() => Router.back()}
              >
                ← Back to Influencers
              </Button>
            </InfluencerHeader>
            <Query
              query={SINGLE_INFLUENCER_QUERY}
              variables={{ id: this.props.id }}
            >
              {({ data, error, loading }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <Error error={error} />;
                if (!data.influencer)
                  return <p>No influencer found for {this.props.id}</p>;
                const influencer = data.influencer;
                return (
                  <>
                    <Head>
                      <title>fence | {influencer.firstName}</title>
                    </Head>
                    <InfluencerCard
                      influencer={influencer}
                      key={influencer.id}
                    />
                    <InfluencerLoggedActivities
                      influencer={influencer}
                      showModal={this.showModal}
                    />
                    <InfluencerNotes influencer={influencer} />
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

export default Influencer;
