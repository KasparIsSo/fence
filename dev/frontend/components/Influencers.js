import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import { GRID, BREAKPOINTS } from "./styles/Layout";
import TYPE from "./styles/Typography";
import Influencer from "./Influencer";
import Button from "./Button";

const ALL_INFLUENCERS_QUERY = gql`
  query ALL_INFLUENCERS_QUERY {
    influencers {
      id
      firstName
      lastName
      phone
    }
  }
`;

const InfluencerContainer = styled.div`
  ${GRID.container};
`;

const InfluencerHeader = styled.div`
  grid-column: span 12;
`;

const InfluencerTitle = styled.h1`
  ${TYPE.displaySmall.feature.ink}
  display: inline-block;
`;

class Influencers extends Component {
  render() {
    return (
      <InfluencerContainer>
        <InfluencerHeader>
          <InfluencerTitle>Influencers</InfluencerTitle>
          <Button buttonType="primary" float="right">
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
    );
  }
}

export default Influencers;
