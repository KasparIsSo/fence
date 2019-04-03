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
  padding: ${toRem(10)} 0;
`;

class InfluencerLoggedActivity extends Component {
  static propTpes = {
    loggedActivity: PropTypes.object.isRequired
  };
  render() {
    const { loggedActivity } = this.props;
    return (
      <InfluencerActivityWrapper>
        {loggedActivity.description}
      </InfluencerActivityWrapper>
    );
  }
}

export default InfluencerLoggedActivity;
