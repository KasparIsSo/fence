import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import styled from "styled-components";

import { toRem } from "./utils/unitConversion";

import ANIMATION from "./styles/Animation";
import TYPE from "./styles/Typography";
import { BREAKPOINTS } from "./styles/Layout";

import { CardContainer } from "./CardContainer";
import Tag from "./Tag";

import EmptyProfileImg from "react-svg-loader!../static/icons/emptyState/influencer.svg";
import HamburgerMenu from "react-svg-loader!../static/icons/nav/hamburger.svg";

const InfluencerCardContainer = styled(CardContainer)`
  grid-column: span 4;
  padding: ${toRem(30)} ${toRem(20)};

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    margin: 0;
  }
`;

const InfluencerProfileImg = styled.a`
  display: block;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto ${toRem(20)};
  background-color: ${props => props.theme.color.blue.feature};
  /* ${ANIMATION.default} */

  >img, svg {
    ${ANIMATION.default}
    width: 100%;
  }

  :hover {
    > img, svg {
      opacity: 0.8;
    }
  }
`;

const InfluencerInfo = styled.a`
  display: block;
  text-align: center;
  padding: 0 ${toRem(20)};
  margin-bottom: ${toRem(30)};
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    padding: 0;
  }

  :hover {
    h3 {
      color: ${props => props.theme.color.blue.feature};
    }

    p {
      color: ${props => props.theme.color.blue.feature};
    }
  }
`;

const InfluencerName = styled.h3`
  ${TYPE.heading.feature.ink}
  margin: 0;
  ${ANIMATION.default}
`;

const InfluencerDescription = styled.p`
  ${TYPE.caption.primary.subdued}
  font-style: italic;
  padding: 0 ${toRem(40)};
  margin: 0;
  ${ANIMATION.default}
`;

const InfluencerStat = styled.div`
  display: block;
`;

const InfluencerStatTitle = styled.h4`
  ${TYPE.body.primary.ink}
  font-weight: 700;
`;

const SINGLE_INFLUENCER_ADRESS_QUERY = gql`
  query SINGLE_INFLUENCER_ADDRESS_QUERY($id: String!) {
    addresses(where: { influencerId: $id }) {
      unit
      streetNumber
      street
      city
      country
      postalCode
      influencerId
    }
  }
`;

const SINGLE_INFLUENCER_SOCIALMEDIA_QUERY = gql`
  query SINGLE_INFLUENCER_SOCIALMEDIA_QUERY($id: String!) {
    socials(where: { influencerId: $id }) {
      twitter
      instagram
      facebook
    }
  }
`;

const SINGLE_INFLUENCER_SIZE_QUERY = gql`
  query SINGLE_INFLUENCER_SIZE_QUERY($id: String!) {
    sizes(where: { influencerId: $id }) {
      shirt
      pant
      shoe
    }
  }
`;

class InfluencerCard extends Component {
  static propTpes = {
    influencer: PropTypes.object.isRequired
  };
  render() {
    const { influencer } = this.props;
    return (
      <InfluencerCardContainer>
        <InfluencerProfileImg>
          {influencer.thumbnail ? (
            <img
              src={influencer.thumbnail}
              alt={influencer.firstName + " profile image"}
            />
          ) : (
            <EmptyProfileImg />
          )}
        </InfluencerProfileImg>

        <InfluencerInfo>
          <InfluencerName>
            {influencer.firstName} {influencer.lastName}
          </InfluencerName>
          <InfluencerDescription>
            {influencer.description
              ? influencer.description
              : '"No description, but I’m sure they’re great"'}
          </InfluencerDescription>
        </InfluencerInfo>
        <Query
          query={SINGLE_INFLUENCER_ADRESS_QUERY}
          variables={{ id: influencer.id }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <Error error={error} />;
            if (!data.addresses)
              return <p>No addresses found for {this.props.id}</p>;
            console.log(data);
            return (
              <>
                {data.addresses.map(address => (
                  <InfluencerStat key={address.influencerId}>
                    <InfluencerStatTitle>Address</InfluencerStatTitle>
                    <p>{address.unit}</p>
                    <p>{address.streetNumber}</p>
                    <p>{address.street}</p>
                    <p>{address.city}</p>
                    <p>{address.country}</p>
                    <p>{address.postalCode}</p>
                  </InfluencerStat>
                ))}
              </>
            );
          }}
        </Query>
      </InfluencerCardContainer>
    );
  }
}

export default InfluencerCard;
