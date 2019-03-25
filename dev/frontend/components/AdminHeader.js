import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import { PropTypes } from "react";

import Nav from "./Nav";

import { GRID, BREAKPOINTS } from "./styles/Layout";
import { toRem } from "./utils/unitConversion";
import TYPE from "./styles/Typography";
import ANIMATION from "./styles/Animation";
import Logo from "react-svg-loader!../static/icons/brand/logo.svg";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const AdminHeaderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 15rem;
  height: 100vh;
  min-height: min-content;
  background: ${props => props.theme.color.gray.white};
  box-shadow: ${props => props.theme.shadow.drop};
  padding: ${toRem(60)} ${toRem(40)};
`;

const LogoWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto ${toRem(60)};
`;

const NavLink = styled.a`
  text-decoration: none;
  display: inline-block;
  clear: both;
  margin-bottom: ${toRem(30)};
  cursor: pointer;
`;

const NavIconWrapper = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: ${toRem(10)};
  background: #333;
`;

const NavLinkText = styled.p`
  display: inline-block;
  vertical-align: top;
  ${TYPE.body.primary.ink}
  margin-bottom: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 7.5rem - 9.75rem);
  min-height: min-content;
`;

const NavLinksContainer = styled.div``;

const SettingsContainer = styled.div`
  padding-top: ${toRem(30)};
  border-top: 1px solid ${props => props.theme.color.gray.subdued};
  vertical-align: bottom;
  a:last-child {
    margin: 0;
  }
`;

class AdminHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navBackgroundWhite: false };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const navBackgroundWhite = window.scrollY > 50;
      if (navBackgroundWhite !== this.state.navBackgroundWhite) {
        this.setState({ navBackgroundWhite });
      }
    });
  }

  render() {
    return (
      <AdminHeaderWrapper
        className={this.state.navBackgroundWhite ? "scrolled" : null}
      >
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <LinksContainer>
          <NavLinksContainer>
            <NavLink>
              <NavIconWrapper />
              <NavLinkText>Campaigns</NavLinkText>
            </NavLink>
            <NavLink>
              <NavIconWrapper />
              <NavLinkText>Influencers</NavLinkText>
            </NavLink>
            <NavLink>
              <NavIconWrapper />
              <NavLinkText>Profile</NavLinkText>
            </NavLink>
          </NavLinksContainer>
          <SettingsContainer>
            <NavLink>
              <NavIconWrapper />
              <NavLinkText>Settings</NavLinkText>
            </NavLink>
            <NavLink>
              <NavIconWrapper />
              <NavLinkText>Log Out</NavLinkText>
            </NavLink>
          </SettingsContainer>
        </LinksContainer>
      </AdminHeaderWrapper>
    );
  }
}

export default AdminHeader;
