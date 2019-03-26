import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CardContainer } from "./CardContainer";

const InfluencerCard = styled(CardContainer)`
  grid-column: span 4;
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
        {influencer.firstName}
        {/* Link to influencer profile */}
      </InfluencerCard>
    );
  }
}

export default Influencer;
