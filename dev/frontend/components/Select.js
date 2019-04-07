import React, { Component } from "react";
import styled from "styled-components";

import ANIMATION from "./styles/Animation";
import TYPE from "./styles/Typography";
import { toRem } from "./utils/unitConversion";

const SelectWrapper = styled.div`
  margin: 1rem;

  > button {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  ${TYPE.body.primary.ink}
  margin: 0;
  display: block;
`;

const SelectContainer = styled.select`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  padding: 0.625rem 1.25rem;
  height: 2.75rem;
  ${TYPE.body.primary.white}
  ${ANIMATION.default}
  float: ${props => props.float};
  background: ${props => props.theme.color.green.feature};
  color: ${props => (props.color ? props.color : props.theme.color.gray.white)};
  border-color: ${props => props.theme.color.green.feature};
  margin: ${toRem(5)} 0 0 0;
  width: 100%;

  :hover {
    box-shadow: ${props => props.theme.shadow.drop};
  }

  :focus {
    border-color: ${props => props.theme.color.green.darkest};
    box-shadow: inset 0 0 0 0.0625rem
      ${props => props.theme.color.green.darkest};
  }

  :active {
    box-shadow: ${props => props.theme.shadow.inner};
  }
`;

const SelectOption = styled.option``;

const Select = props => {
  const options = propOptions => {
    return (
      <>
        {propOptions.map(option => (
          <SelectOption
            value={option.charAt(0).toLowerCase() + option.substring(1)}
          >
            {option.charAt(0).toUpperCase() + option.substring(1)}
          </SelectOption>
        ))}
      </>
    );
  };

  return (
    <SelectWrapper>
      <Label htmlfor={props.labelFor ? props.labelFor : "title"}>
        {props.label ? props.label : "Label"}
      </Label>
      <SelectContainer
        float={props.float}
        color={props.color}
        onChange={props.onChange}
        className={props.className}
      >
        {options(props.options)}
        <option>hey</option>
      </SelectContainer>
    </SelectWrapper>
  );
};

export default Select;
