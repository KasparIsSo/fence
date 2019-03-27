import styled from "styled-components";

import TYPE from "./styles/Typography";
import { toRem } from "./utils/unitConversion";

import TextFieldInput from "./TextFieldInput";
import Button from "./Button";

const TextFieldInputWrapper = styled.div`
  margin: 1rem;

  > button {
    margin-top: 0;
    margin-bottom: 0;
  }

  > input {
    margin: 0;
    width: 100%;
  }
`;

const Label = styled.h6`
  ${TYPE.body.primary.ink}
  margin: 0;
  margin-bottom: ${toRem(5)};
`;

const TextField = props => {
  return (
    <TextFieldInputWrapper>
      <Label>{props.label ? props.label : "Label"}</Label>
      <TextFieldInput
        textInputName={props.textInputName}
        textInputPlaceholder={props.textInputPlaceholder}
        inputType={props.inputType}
      />
      <Button
        buttonType={props.textFieldType ? props.textFieldType : "primary"}
      >
        {props.buttonInnerText ? props.buttonInnerText : "Submit"}
      </Button>
    </TextFieldInputWrapper>
  );
};

export default TextField;

const TextFieldSimple = props => {
  return (
    <TextFieldInputWrapper className={props.className}>
      <Label>{props.label ? props.label : "Label"}</Label>
      <TextFieldInput
        textInputName={props.textInputName}
        textInputPlaceholder={props.textInputPlaceholder}
        inputType={props.inputType}
      />
    </TextFieldInputWrapper>
  );
};

export { TextFieldSimple };
