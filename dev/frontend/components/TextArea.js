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
`;

const Label = styled.label`
  ${TYPE.body.primary.ink}
  margin: 0;
  > textarea {
    margin: ${toRem(5)} 0 0 0;
    display: block;
  }
`;

const TextArea = props => {
  return (
    <TextAreaWrapper>
      <Label>
        {props.label ? props.label : "Label"}
        <TextAreaInput
          textInputName={props.textInputName}
          textInputPlaceholder={props.textInputPlaceholder}
          inputType={props.inputType}
          required={props.required ? true : null}
          value={props.value}
          onChange={props.onChange}
        />
        <Button
          buttonType={props.textAreaType ? props.textAreaType : "primary"}
        >
          {props.buttonInnerText ? props.buttonInnerText : "Submit"}
        </Button>
      </Label>
    </TextAreaWrapper>
  );
};

export default TextArea;

const TextAreaSimple = props => {
  return (
    <TextAreaWrapper>
      <Label>
        {props.label ? props.label : "Label"}
        <TextAreaInput
          textInputName={props.textInputName}
          textInputPlaceholder={props.textInputPlaceholder}
          inputType={props.inputType}
          required={props.required ? true : null}
          value={props.value}
          onChange={props.onChange}
        />
      </Label>
    </TextAreaWrapper>
  );
};

export { TextAreaSimple };
