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
import Facebook from "react-svg-loader!../static/icons/social/ink/facebook.svg";
import Instagram from "react-svg-loader!../static/icons/social/ink/instagram.svg";
import Snapchat from "react-svg-loader!../static/icons/social/ink/snapchat.svg";
import Twitter from "react-svg-loader!../static/icons/social/ink/twitter.svg";
import Website from "react-svg-loader!../static/icons/social/ink/web.svg";

const InfluencerCardContainer = styled(CardContainer)`
  grid-column: span 4;
  padding: ${toRem(30)} ${toRem(20)} 0;

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
  margin-bottom: ${toRem(30)};
`;

const InfluencerStatTitle = styled.h4`
  ${TYPE.body.primary.ink}
  font-weight: 700;
  margin-bottom: ${toRem(10)};
`;

const InfluencerContent = styled.p`
  ${TYPE.caption.primary.subdued}
  margin: 0;
  display: inline-block;
`;

const InfluencerContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InfluencerSocial = styled.a`
  width: calc(50% - ${toRem(10)});
  height: 1rem;
  display: inline-block;
  margin-bottom: ${toRem(10)};

  > p {
    vertical-align: top;
  }
`;

const InfluencerSocialIconWrapper = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: ${toRem(5)};

  > svg {
    vertical-align: top;
  }
`;

const SINGLE_INFLUENCER_ADRESS_QUERY = gql`
  query SINGLE_INFLUENCER_ADDRESS_QUERY($id: ID) {
    addresses(where: { influencer: { id: $id } }) {
      unit
      streetNumber
      street
      city
      country
      postalCode
    }
  }
`;

const SINGLE_INFLUENCER_SOCIALMEDIA_QUERY = gql`
  query SINGLE_INFLUENCER_SOCIALMEDIA_QUERY($id: ID) {
    socials(where: { influencer: { id: $id } }) {
      twitter
      instagram
      facebook
      snapchat
      website
    }
  }
`;

const SINGLE_INFLUENCER_SIZE_QUERY = gql`
  query SINGLE_INFLUENCER_SIZE_QUERY($id: ID) {
    sizes(where: { influencer: { id: $id } }) {
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
          query={SINGLE_INFLUENCER_SOCIALMEDIA_QUERY}
          variables={{ id: influencer.id }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <Error error={error} />;
            if (!data.socials[0]) {
              return null;
            }
            const social = data.socials[0];
            return (
              <>
                <InfluencerStat>
                  <InfluencerStatTitle>Social</InfluencerStatTitle>
                  <InfluencerContentWrapper>
                    {social.facebook ? (
                      <InfluencerSocial
                        href={"https://www.facebook.com/" + social.facebook}
                        target="_blank"
                      >
                        <InfluencerSocialIconWrapper>
                          <Facebook />
                        </InfluencerSocialIconWrapper>
                        <InfluencerContent>
                          @{social.facebook}
                        </InfluencerContent>
                      </InfluencerSocial>
                    ) : null}
                    {social.instagram ? (
                      <InfluencerSocial
                        href={"https://www.instagram.com/" + social.instagram}
                        target="_blank"
                      >
                        <InfluencerSocialIconWrapper>
                          <Instagram />
                        </InfluencerSocialIconWrapper>
                        <InfluencerContent>
                          @{social.instagram}
                        </InfluencerContent>
                      </InfluencerSocial>
                    ) : null}
                    {social.twitter ? (
                      <InfluencerSocial
                        href={"https://www.twitter.com/" + social.twitter}
                        target="_blank"
                      >
                        <InfluencerSocialIconWrapper>
                          <Twitter />
                        </InfluencerSocialIconWrapper>
                        <InfluencerContent>@{social.twitter}</InfluencerContent>
                      </InfluencerSocial>
                    ) : null}
                    {social.snapchat ? (
                      <InfluencerSocial>
                        <InfluencerSocialIconWrapper>
                          <Snapchat />
                        </InfluencerSocialIconWrapper>
                        <InfluencerContent>{social.snapchat}</InfluencerContent>
                      </InfluencerSocial>
                    ) : null}
                    {social.website ? (
                      <InfluencerSocial
                        href={
                          social.website.substring(0, 4) == "http"
                            ? social.website
                            : "http://" + social.website
                        }
                        target="_blank"
                      >
                        <InfluencerSocialIconWrapper>
                          <Website />
                        </InfluencerSocialIconWrapper>
                        <InfluencerContent>{social.website}</InfluencerContent>
                      </InfluencerSocial>
                    ) : null}
                  </InfluencerContentWrapper>
                </InfluencerStat>
              </>
            );
          }}
        </Query>
        <Query
          query={SINGLE_INFLUENCER_ADRESS_QUERY}
          variables={{ id: influencer.id }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <Error error={error} />;
            if (!data.addresses[0]) {
              return null;
            }
            const address = data.addresses[0];
            return (
              <>
                <InfluencerStat>
                  <InfluencerStatTitle>Address</InfluencerStatTitle>
                  <InfluencerContent>
                    {address.unit ? "Unit " + address.unit : null}
                    {address.streetNumber && address.street && address.unit ? (
                      <br />
                    ) : null}
                    {address.streetNumber} {address.street}
                    {address.city ? <br /> : null} {address.city}
                    {address.country ? <br /> : null} {address.country}
                    {address.postalCode ? <br /> : null} {address.postalCode}
                  </InfluencerContent>
                </InfluencerStat>
              </>
            );
          }}
        </Query>
        <Query
          query={SINGLE_INFLUENCER_SIZE_QUERY}
          variables={{ id: influencer.id }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <Error error={error} />;
            if (!data.sizes[0]) {
              return null;
            }
            const size = data.sizes[0];
            return (
              <>
                <InfluencerStat>
                  <InfluencerStatTitle>Sizes</InfluencerStatTitle>
                  <InfluencerContent>
                    {size.shirt ? "Shirt: " + size.shirt : null}
                    {size.pant ? <br /> : null}
                    {size.pant ? "Pant: " + size.pant : null}
                    {size.shoe ? <br /> : null}
                    {size.shoe ? "Shoe: " + size.shoe / 10 : null}
                  </InfluencerContent>
                  <InfluencerContentWrapper />
                </InfluencerStat>
              </>
            );
          }}
        </Query>
      </InfluencerCardContainer>
    );
  }
}

export default InfluencerCard;
