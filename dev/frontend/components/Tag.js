import styled from "styled-components";

import { toRem } from "./utils/unitConversion";

import TYPE from "./styles/Typography";
import ANIMATION from "./styles/Animation";

const TagWrapper = styled.a`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  padding: ${toRem(5)} ${toRem(10)};
  height: 2.75rem;
  ${TYPE.body.primary.white}
  ${ANIMATION.default}
  margin: 0 1rem 1rem 0;
  float: ${props => props.float};
  cursor: pointer;

  :hover {
    box-shadow: ${props => props.theme.shadow.drop};
  }

  :focus {
    outline: none;
  }

  &.active {
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

  &.upcoming {
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

  &.past {
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

  &.cancelled {
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

const TagContent = styled.span`
  display: inline-block;
  transform: translateY(-0.0625rem);
`;

const Tag = props => {
  return (
    <TagWrapper
      className={props.tagType ? props.tagType : null}
      float={props.float ? props.float : null}
    >
      <TagContent>{props.children}</TagContent>
    </TagWrapper>
  );
};

export default Tag;
