import styled from "styled-components";

const ButtonGroupExtend = styled.div`
  margin: 1rem;

  > button {
    margin: 0;
    border-radius: 0;
    border-width: 0.0625rem;
    border-style: solid;
    vertical-align: middle;
  }

  button:first-child {
    border-radius: 0.125rem 0 0 0.125rem;
    border-right: none;
  }

  button:last-child {
    border-radius: 0 0.125rem 0.125rem 0;
    border-left: none;
  }
`;

export const ButtonPrimaryGroup = styled(ButtonGroupExtend)`
  > button.primary {
    border-color: ${props => props.theme.color.green.darkest};
    :active,
    :hover {
      background-color: ${props => props.theme.color.green.darkest};
    }
  }
`;

export const ButtonSecondaryGroup = styled(ButtonGroupExtend)`
  > button {
    border-color: ${props => props.theme.color.gray.ink};
  }
`;

export const ButtonOutlineGroup = styled(ButtonGroupExtend)`
  > button {
    border-color: ${props => props.theme.color.gray.ink};
    :active,
    :hover {
      background-color: ${props => props.theme.color.gray.light};
    }
  }
`;
