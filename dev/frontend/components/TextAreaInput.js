import styled from "styled-components";

import TYPE from "../components/styles/Typography";
import ANIMATION from "../components/styles/Animation";

const TextArea = styled.textarea`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: ${props => props.theme.color.gray.medium};
  padding: 0.625rem;
  height: 7.25rem;
  width: 100%;
  ${TYPE.body.primary.ink}
  ${ANIMATION.default}
  margin: 1rem;
  resize: none;

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

const TextAreaInput = props => {
  return (
    <TextArea
      type={props.type ? props.type : "text"}
      name={props.textInputName ? props.textInputName : "textInput"}
      placeholder={
        props.textInputPlaceholder
          ? props.textInputPlaceholder
          : "Type Somthing..."
      }
      className={props.inputType ? props.inputType : null}
      required={props.required ? true : null}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextAreaInput;
