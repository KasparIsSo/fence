import styled from "styled-components";

import TYPE from "./styles/Typography";

import TextAreaInput from "./TextAreaInput";
import Button from "./Button";

const TextAreaWrapper = styled.div`
  margin: 1rem;
  display: inline-block;
  width: calc(100% - 2rem);

  > button {
    margin-right: 0;
    clear: both;
    float: right;
  }

  > textarea {
    margin: 0;
    display: block;
  }
`;

const Label = styled.h6`
  ${TYPE.body.primary.ink}
`;

const TextArea = props => {
  return (
    <TextAreaWrapper>
      <Label>{props.label ? props.label : "Label"}</Label>
      <TextAreaInput
        name={props.textInputName}
        placeholder={props.textInputPlaceholder}
        inputType={props.textAreaType}
      />
      <Button buttonType={props.textAreaType ? props.textAreaType : "primary"}>
        {props.buttonInnerText ? props.buttonInnerText : "Submit"}
      </Button>
    </TextAreaWrapper>
  );
};

export default TextArea;
