import styled from "styled-components";

import TYPE from "../components/styles/Typography";
import ANIMATION from "../components/styles/Animation";

const ButtonExtend = styled.button`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  padding: 0.625rem 1.25rem;
  height: 2.75rem;
  ${TYPE.body.primary.white}
  ${ANIMATION.default}
  margin: 1rem;

  :hover {
    box-shadow: ${props => props.theme.shadow.drop};
  }

  :focus {
    outline: none;
  }
`;

const ButtonContent = styled.span`
  display: inline-block;
  transform: translateY(-0.0625rem);
`;

const Primary = styled(ButtonExtend)`
  background: ${props => props.theme.color.green.feature};
  color: ${props => (props.color ? props.color : props.theme.color.gray.white)};
  border-color: ${props => props.theme.color.green.feature};

  :focus {
    border-color: ${props => props.theme.color.green.darkest};
    box-shadow: inset 0 0 0 0.0625rem
      ${props => props.theme.color.green.darkest};
  }

  :active {
    box-shadow: ${props => props.theme.shadow.inner};
  }
`;

export const ButtonPrimary = props => {
  return (
    <Primary>
      <ButtonContent>{props.children}</ButtonContent>
    </Primary>
  );
};

const Secondary = styled(ButtonExtend)`
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
`;

export const ButtonSecondary = props => {
  return (
    <Secondary>
      <ButtonContent>{props.children}</ButtonContent>
    </Secondary>
  );
};

const Outline = styled(ButtonExtend)`
  background: none;
  color: ${props =>
    props.color ? props.color : props.theme.color.gray.subdued};
  border-color: ${props => props.theme.color.gray.subdued};

  :hover {
    background-color: ${props => props.theme.color.gray.white};
    color: ${props => (props.color ? props.color : props.theme.color.gray.ink)};
  }

  :focus {
    border-color: ${props => props.theme.color.gray.ink};
    color: ${props => (props.color ? props.color : props.theme.color.gray.ink)};
    box-shadow: inset 0 0 0 0.0625rem ${props => props.theme.color.gray.ink};
  }

  :active {
    background-color: ${props => props.theme.color.gray.white};
    color: ${props => (props.color ? props.color : props.theme.color.gray.ink)};
    box-shadow: ${props => props.theme.shadow.inner};
  }
`;

export const ButtonOutline = props => {
  return (
    <Outline>
      <ButtonContent>{props.children}</ButtonContent>
    </Outline>
  );
};

const Danger = styled(ButtonExtend)`
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
`;

export const ButtonDanger = props => {
  return (
    <Danger>
      <ButtonContent>{props.children}</ButtonContent>
    </Danger>
  );
};
