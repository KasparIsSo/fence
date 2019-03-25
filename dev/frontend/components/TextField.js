import styled from "styled-components";

import TYPE from "./styles/Typography";

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
  }
`;

const Label = styled.h6`
  ${TYPE.body.primary.ink}
`;

const TextField = props => {
  return (
    <TextFieldInputWrapper>
      <Label>{props.label ? props.label : "Label"}</Label>
      <TextFieldInput
        name={props.textInputName}
        placeholder={props.textInputPlaceholder}
        inputType={props.textFieldType}
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
