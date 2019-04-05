import React, { Component } from "react";
import styled from "styled-components";

import ANIMATION from "./styles/Animation";
import TYPE from "./styles/Typography";

const SelectWrapper = styled.select`
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
        {propOptions.map(option => {
          const value = option.charAt(0).toLowerCase() + option.substring(1);
          const innerText =
            option.charAt(0).toUpperCase() + option.substring(1);
          <SelectOption value={value}>{innerText}</SelectOption>;
        })}
      </>
    );
  };

  return (
    <SelectWrapper float={props.float} color={props.color}>
      {options(props.options)}
    </SelectWrapper>
  );
};

export default Select;
