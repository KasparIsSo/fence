import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { toRem } from "./utils/unitConversion";
import TYPE from "./styles/Typography";

import Facebook from "react-svg-loader!../static/icons/social/ink/facebook.svg";
import Instagram from "react-svg-loader!../static/icons/social/ink/instagram.svg";
import Snapchat from "react-svg-loader!../static/icons/social/ink/snapchat.svg";
import Twitter from "react-svg-loader!../static/icons/social/ink/twitter.svg";
import Celebration from "react-svg-loader!../static/icons/social/ink/celebration.svg";
import Meeting from "react-svg-loader!../static/icons/social/ink/meeting.svg";
import Event from "react-svg-loader!../static/icons/social/ink/event.svg";

const InfluencerActivityWrapper = styled.div`
  padding: ${toRem(10)};
  border-top: ${toRem(1)} solid ${props => props.theme.color.gray.ink};
  display: grid;
  grid-template-columns: 1fr ${toRem(92)};
  :last-child {
    border-bottom: ${toRem(1)} solid ${props => props.theme.color.gray.ink};
  }
`;

const InfluencerActivityDescription = styled.div`
  display: flex;
  margin-right: ${toRem(30)};
`;

const InfluencerActivityIconWrapper = styled.span`
  display: inline-block;
  flex: 0 0 1rem;
  width: 1rem;
  height: 1rem;
  margin-right: ${toRem(5)};
  transform: translateY(0.25rem);

  > svg {
    vertical-align: top;
  }
`;

const InfluencerActivityDescriptionText = styled.p`
  vertical-align: top;
  display: inline-block;
  ${TYPE.body.primary.ink}
  margin-bottom: 0;
`;

const InfluencerActivityDate = styled.p`
  /* display: inline-block; */
  vertical-align: middle;
  float: right;
  width: ${toRem(92)};
  ${TYPE.body.primary.ink}
  margin-bottom: 0;
`;

class InfluencerLoggedActivity extends Component {
  static propTpes = {
    loggedActivity: PropTypes.object.isRequired
  };

  activityIcon(activityType) {
    if (activityType == "INSTAGRAM") {
      return <Instagram />;
    } else if (activityType == "TWITTER") {
      return <Twitter />;
    } else if (activityType == "FACEBOOK") {
      return <Facebook />;
    } else if (activityType == "EVENT") {
      return <Event />;
    } else if (activityType == "MEETING") {
      return <Meeting />;
    } else if (activityType == "CALL") {
      return <Meeting />;
    } else if (activityType == "COFFEE") {
      return <Meeting />;
    } else if (activityType == "CELEBRATION") {
      return <Celebration />;
    } else if (activityType == "OTHER") {
      return <Celebration />;
    }
  }

  formatDate(date) {
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    const activityDate = new Date(date).toLocaleDateString(
      "en-US",
      dateOptions
    );
    return <InfluencerActivityDate>{activityDate}</InfluencerActivityDate>;
  }

  render() {
    const { loggedActivity } = this.props;
    return (
      <InfluencerActivityWrapper>
        <InfluencerActivityDescription>
          <InfluencerActivityIconWrapper>
            {this.activityIcon(loggedActivity.eventType)}
          </InfluencerActivityIconWrapper>
          <InfluencerActivityDescriptionText>
            {loggedActivity.description}
          </InfluencerActivityDescriptionText>
        </InfluencerActivityDescription>
        {this.formatDate(loggedActivity.updatedAt)}
      </InfluencerActivityWrapper>
    );
  }
}

export default InfluencerLoggedActivity;
