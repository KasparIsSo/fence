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
`;

const Label = styled.label`
  ${TYPE.body.primary.ink}
  margin: 0;

  > input {
    margin: ${toRem(5)} 0 0 0;
    width: 100%;
  }
`;

const TextField = props => {
  return (
    <TextFieldInputWrapper>
      <Label htmlfor={props.labelFor ? props.labelFor : "title"}>
        {props.label ? props.label : "Label"}
        <TextFieldInput
          type={props.type}
          textInputName={props.textInputName}
          textInputPlaceholder={props.textInputPlaceholder}
          inputType={props.inputType}
          required={props.required ? "required" : null}
          value={props.value}
          onChange={props.onChange}
        />
      </Label>
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
      <Label htmlfor={props.labelFor ? props.labelFor : "title"}>
        {props.label ? props.label : "Label"}
        <TextFieldInput
          type={props.type}
          textInputName={props.textInputName}
          textInputPlaceholder={props.textInputPlaceholder}
          inputType={props.inputType}
          required={props.required ? true : null}
          value={props.value}
          onChange={props.onChange}
        />
      </Label>
    </TextFieldInputWrapper>
  );
};

export { TextFieldSimple };
