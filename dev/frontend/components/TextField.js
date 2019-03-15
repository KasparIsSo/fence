import styled from "styled-components";

import TYPE from "../components/styles/Typography";
import ANIMATION from "../components/styles/Animation";

import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonOutline,
  ButtonDanger
} from "../components/Button";

const Input = styled.input`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: ${props => props.theme.color.gray.medium};
  padding: 0.625rem 1.25rem;
  height: 2.75rem;
  ${TYPE.body.primary.ink}
  ${ANIMATION.default}
  margin: 1rem;

  :focus {
    outline: none;
    border-color: ${props => props.theme.color.gray.ink};
    box-shadow: inset 0 0 0 0.0625rem ${props => props.theme.color.gray.ink};
  }

  ::placeholder {
    color: ${props => props.theme.color.gray.medium};
  }
`;

export const TextField = props => {
  return (
    <Input
      type="text"
      name={props.textInputName ? props.textInputName : "textInput"}
      placeholder={
        props.textInputPlaceholder ? props.textInputPlaceholder : "Text"
      }
    />
  );
};
