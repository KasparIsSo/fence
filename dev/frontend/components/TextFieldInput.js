import styled from "styled-components";

import TYPE from "../components/styles/Typography";
import ANIMATION from "../components/styles/Animation";

const Input = styled.input`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: ${props => props.theme.color.gray.medium};
  padding: 0.625rem;
  height: 2.75rem;
  ${TYPE.body.primary.ink}
  ${ANIMATION.default}
  margin: 1rem;

  :focus {
    outline: none;
    border-color: ${props => props.theme.color.gray.ink};
  }

  ::placeholder {
    color: ${props => props.theme.color.gray.medium};
  }

  &.primary {
    :focus {
      border-color: ${props => props.theme.color.green.feature};
    }
  }

  &.secondary {
  }

  &.outline {
    background: none;
    :focus {
      background-color: ${props => props.theme.color.gray.white};
      border-color: ${props => props.theme.color.gray.subdued};
    }
  }

  &.danger {
    :focus {
      border-color: ${props => props.theme.color.red.feature};
    }
  }
`;

const TextFieldInput = props => {
  return (
    <Input
      type={props.type ? props.type : "text"}
      name={props.textInputName ? props.textInputName : "textInput"}
      placeholder={
        props.textInputPlaceholder ? props.textInputPlaceholder : "Text"
      }
      className={props.inputType ? props.inputType : null}
      required={props.required ? true : null}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextFieldInput;
