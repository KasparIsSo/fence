import styled from "styled-components";

import TYPE from "../components/styles/Typography";
import ANIMATION from "../components/styles/Animation";

export const CardContainer = styled.div`
  border-radius: 0.125rem;
  border-width: 0.0625rem;
  border-color: ${props => props.theme.color.gray.light};
  border-style: solid;
  background: ${props => props.theme.color.gray.white};
  padding: 2.5rem 2rem;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadow.drop};
`;

export const CreamCardContainer = styled(CardContainer)`
  border-width: 0;
  background: ${props => props.theme.color.cream};
`;

export const DarkCardContainer = styled(CardContainer)`
  border-width: 0;
  background: ${props => props.theme.color.gray.ink};
`;
