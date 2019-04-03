import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { toRem } from "./utils/unitConversion";
import TYPE from "./styles/Typography";

import { CardContainer } from "./CardContainer";

const InfluencerNoteWrapper = styled(CardContainer)`
  grid-column: span 1;
  padding: ${toRem(20)};
`;

const InfluencerNoteContent = styled.p`
  display: inline-block;
  ${TYPE.body.primary.ink}
  margin-bottom: ${toRem(20)};
`;

const InfluencerNoteDate = styled.p`
  text-align: right;
  ${TYPE.caption.primary.subdued}
  margin-bottom: 0;
`;

class InfluencerNote extends Component {
  static propTpes = {
    note: PropTypes.object.isRequired
  };

  formatDate(date) {
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    const noteDate = new Date(date).toLocaleDateString("en-US", dateOptions);
    return <InfluencerNoteDate>{noteDate}</InfluencerNoteDate>;
  }

  render() {
    const { note } = this.props;
    return (
      <InfluencerNoteWrapper>
        <InfluencerNoteContent>{note.content}</InfluencerNoteContent>
        {this.formatDate(note.updatedAt)}
      </InfluencerNoteWrapper>
    );
  }
}

export default InfluencerNote;
