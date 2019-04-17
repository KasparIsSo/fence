import React, { Component } from "react";
import styled from "styled-components";

import TYPE from "./styles/Typography";
import { BREAKPOINTS } from "./styles/Layout";
import { toRem } from "./utils/unitConversion";

const UploadFieldInputWrapper = styled.div`
  margin: 1rem;
`;

const UploadFieldInput = styled.input`
  margin-bottom: ${toRem(10)};
`;

const Label = styled.label`
  ${TYPE.body.primary.ink}
  margin: 0;

  > input {
    margin: ${toRem(5)} 0 0 0;
    width: 100%;
  }

  > img {
    width: 50%;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    > img {
      width: 100%;
    }
  }
`;

class UploadField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ image: props.image });
  }

  render() {
    return (
      <UploadFieldInputWrapper className={this.props.className}>
        <Label htmlfor={this.props.labelFor ? this.props.labelFor : "title"}>
          {this.props.label ? this.props.label : "Label"}
          <UploadFieldInput
            type="file"
            name={this.props.name ? this.props.name : "file"}
            placeholder={
              this.props.placeholder
                ? this.props.placeholder
                : "Upload an image"
            }
            required={this.props.required ? true : null}
            onChange={this.props.onChange}
          />
          {this.state.image && (
            <img src={this.state.image} alt="Upload Preview" />
          )}
        </Label>
      </UploadFieldInputWrapper>
    );
  }
}

export default UploadField;
