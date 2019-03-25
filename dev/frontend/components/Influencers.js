import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Influencer from "./Influencer";

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

class Influencers extends Component {
  render() {
    return (
      <div>
        <p>Influencers</p>
        <Query query={ALL_INFLUENCERS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.influencers.map(influencer => (
                  <Influencer influencer={influencer} key={influencer.id} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Influencers;
