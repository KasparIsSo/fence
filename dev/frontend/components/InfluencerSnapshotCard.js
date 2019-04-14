import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

import { toRem } from "./utils/unitConversion";

import ANIMATION from "./styles/Animation";
import TYPE from "./styles/Typography";
import { BREAKPOINTS } from "./styles/Layout";

import { CardContainer } from "./CardContainer";
import Tag from "./Tag";

import EmptyProfileImg from "react-svg-loader!../static/icons/emptyState/influencer.svg";

const InfluencerCardContainer = styled(CardContainer)`
  grid-column: span 4;
  padding: ${toRem(30)} ${toRem(20)};
  margin-bottom: 0;

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    margin-bottom: ${toRem(20)};
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
    height: 100%;
    object-fit: cover;
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

const InfluencerCampaigns = styled.div`
  display: block;
`;

const InfluencerCampaignsTitle = styled.h4`
  ${TYPE.body.primary.ink}
  font-weight: 700;
  margin-bottom: ${toRem(10)};
`;

class InfluencerSnapshotCard extends Component {
  static propTpes = {
    influencer: PropTypes.object.isRequired
  };
  render() {
    const { influencer } = this.props;
    return (
      <InfluencerCardContainer>
        <Link
          href={{
            pathname: "/influencer",
            query: { id: influencer.id }
          }}
        >
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
        </Link>
        <Link
          href={{
            pathname: "/influencer",
            query: { id: influencer.id }
          }}
        >
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
        </Link>
        <InfluencerCampaigns>
          <InfluencerCampaignsTitle>Campaigns</InfluencerCampaignsTitle>
          <Tag tagType="active">#stayFresh</Tag>
        </InfluencerCampaigns>
      </InfluencerCardContainer>
    );
  }
}

export default InfluencerSnapshotCard;
