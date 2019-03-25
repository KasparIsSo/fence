import React, { Component } from "react";
import PropTypes from "prop-types";

class Influencer extends Component {
  static propTpes = {
    influencer: PropTypes.object.isRequired
  };
  render() {
    const { influencer } = this.props;
    return (
      <p>
        {influencer.firstName}
        {/* Link to influencer profile */}
      </p>
    );
  }
}

export default Influencer;
