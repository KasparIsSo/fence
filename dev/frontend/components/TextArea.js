import styled from "styled-components";

import TYPE from "./styles/Typography";
import { toRem } from "./utils/unitConversion";

import TextAreaInput from "./TextAreaInput";
import Button from "./Button";

const TextAreaWrapper = styled.div`
  margin: 1rem;
  display: inline-block;
  width: 100%;

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
  margin: 0;
  margin-bottom: ${toRem(5)};
`;

const TextArea = props => {
  return (
    <TextAreaWrapper>
      <Label>{props.label ? props.label : "Label"}</Label>
      <TextAreaInput
        textInputName={props.textInputName}
        textInputPlaceholder={props.textInputPlaceholder}
        inputType={props.inputType}
      />
      <Button buttonType={props.textAreaType ? props.textAreaType : "primary"}>
        {props.buttonInnerText ? props.buttonInnerText : "Submit"}
      </Button>
    </TextAreaWrapper>
  );
};

export default TextArea;

const TextAreaSimple = props => {
  return (
    <TextAreaWrapper>
      <Label>{props.label ? props.label : "Label"}</Label>
      <TextAreaInput
        textInputName={props.textInputName}
        textInputPlaceholder={props.textInputPlaceholder}
        inputType={props.inputType}
      />
    </TextAreaWrapper>
  );
};

export { TextAreaSimple };
