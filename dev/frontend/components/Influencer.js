import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { toRem } from "./utils/unitConversion";

import ANIMATION from "./styles/Animation";
import TYPE from "./styles/Typography";

import { CardContainer } from "./CardContainer";
import Tag from "./Tag";

const InfluencerCard = styled(CardContainer)`
  grid-column: span 4;
  padding: ${toRem(30)} ${toRem(20)};
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

  >img {
    ${ANIMATION.default}
    width: 100%;
  }

  :hover {
    > img {
      opacity: 0.5;
    }
  }
`;

const InfluencerInfo = styled.a`
  display: block;
  text-align: center;
  padding: 0 ${toRem(20)};
  margin-bottom: ${toRem(30)};
  cursor: pointer;

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
`;

class Influencer extends Component {
  static propTpes = {
    influencer: PropTypes.object.isRequired
  };
  render() {
    const { influencer } = this.props;
    console.log(influencer);
    return (
      <InfluencerCard>
        <InfluencerProfileImg>
          <img src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg" />
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
        <InfluencerCampaigns>
          <InfluencerCampaignsTitle>Campaigns</InfluencerCampaignsTitle>
          <Tag TagType="active">yoyoyo</Tag>
        </InfluencerCampaigns>
      </InfluencerCard>
    );
  }
}

export default Influencer;