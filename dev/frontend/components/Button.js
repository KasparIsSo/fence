import styled from "styled-components";

import TYPE from "../components/styles/Typography";
import ANIMATION from "../components/styles/Animation";

const ButtonWrapper = styled.button`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  padding: 0.625rem 1.25rem;
  height: 2.75rem;
  ${TYPE.body.primary.white}
  ${ANIMATION.default}
  margin: 1rem 0 1rem 1rem;
  float: ${props => props.float};

  :hover {
    box-shadow: ${props => props.theme.shadow.drop};
  }

  :focus {
    outline: none;
  }

  &.primary {
    background: ${props => props.theme.color.green.feature};
    color: ${props =>
      props.color ? props.color : props.theme.color.gray.white};
    border-color: ${props => props.theme.color.green.feature};

    :focus {
      border-color: ${props => props.theme.color.green.darkest};
      box-shadow: inset 0 0 0 0.0625rem
        ${props => props.theme.color.green.darkest};
    }

    :active {
      box-shadow: ${props => props.theme.shadow.inner};
    }
  }

  &.secondary {
    background: ${props => props.theme.color.gray.white};
    color: ${props =>
      props.color ? props.color : props.theme.color.gray.subdued};
    border-color: ${props => props.theme.color.gray.ink};

    :focus {
      border-color: ${props => props.theme.color.gray.ink};
      box-shadow: inset 0 0 0 0.0625rem ${props => props.theme.color.gray.ink};
    }

    :active {
      box-shadow: ${props => props.theme.shadow.inner};
    }
  }

  &.outline {
    background: none;
    color: ${props =>
      props.color ? props.color : props.theme.color.gray.subdued};
    border-color: ${props => props.theme.color.gray.subdued};

    :hover {
      background-color: ${props => props.theme.color.gray.white};
      color: ${props =>
        props.color ? props.color : props.theme.color.gray.ink};
    }

    :focus {
      background-color: ${props => props.theme.color.gray.white};
      border-color: ${props => props.theme.color.gray.ink};
      color: ${props =>
        props.color ? props.color : props.theme.color.gray.ink};
      box-shadow: inset 0 0 0 0.0625rem ${props => props.theme.color.gray.ink};
    }

    :active {
      background-color: ${props => props.theme.color.gray.white};
      color: ${props =>
        props.color ? props.color : props.theme.color.gray.ink};
      box-shadow: ${props => props.theme.shadow.inner};
    }
  }

  &.danger {
    background: ${props => props.theme.color.gray.white};
    border-color: ${props => props.theme.color.red.feature};
    color: ${props =>
      props.color ? props.color : props.theme.color.red.feature};

    :hover {
      background-color: ${props => props.theme.color.red.feature};
      border-color: ${props => props.theme.color.red.feature};
      color: ${props => props.theme.color.gray.white};
    }

    :focus {
      border-color: ${props => props.theme.color.red.dark};
      box-shadow: inset 0 0 0 0.0625rem ${props => props.theme.color.red.dark};
    }

    :active {
      box-shadow: ${props => props.theme.shadow.inner};
    }
  }
`;

const ButtonContent = styled.span`
  display: inline-block;
  transform: translateY(-0.0625rem);
`;

const Button = props => {
  return (
    <ButtonWrapper
      className={props.buttonType ? props.buttonType : null}
      float={props.float ? props.float : null}
    >
      <ButtonContent>{props.children}</ButtonContent>
    </ButtonWrapper>
  );
};

export default Button;
