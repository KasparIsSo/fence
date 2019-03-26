import { GRID, BREAKPOINTS } from "./styles/Layout";
import styled from "styled-components";
import TYPE from "./styles/Typography";
import Link from "next/link";

const NavLinksWrapper = styled.div`
  grid-column: 10 /13;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: 5 /9;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: 2 /5;
  }
`;

const NavLink = styled.a`
  display: inline-block;
  color: ${props => props.theme.color.gray.ink};
  ${TYPE.body.primary.ink}
  margin-left: 1rem;
`;

const MarketingNav = () => (
  <NavLinksWrapper>
    <NavLink href="/">log in</NavLink>
    <NavLink href="/">sign up</NavLink>
  </NavLinksWrapper>
);

export default MarketingNav;
