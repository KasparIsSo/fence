import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import { PropTypes } from "react";

import MarketingNav from "./MarketingNav";

import { GRID, BREAKPOINTS } from "./styles/Layout";
import { toRem } from "./utils/unitConversion";
import TYPE from "./styles/Typography";
import ANIMATION from "./styles/Animation";

import Logo from "react-svg-loader!../static/icons/brand/logo.svg";
import Campaigns from "react-svg-loader!../static/icons/nav/campaigns.svg";
import Contacts from "react-svg-loader!../static/icons/nav/contacts.svg";
import LogOut from "react-svg-loader!../static/icons/nav/logOut.svg";
import Profile from "react-svg-loader!../static/icons/nav/profile.svg";
import Settings from "react-svg-loader!../static/icons/nav/settings.svg";

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
  width: ${toRem(200)};
  height: 100vh;
  min-height: min-content;
  background: ${props => props.theme.color.gray.white};
  box-shadow: ${props => props.theme.shadow.drop};
  padding: ${toRem(60)} ${toRem(40)};

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    width: ${toRem(104)};
    padding: ${toRem(20)};
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    width: ${toRem(64)};
  }
`;

const LogoWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto ${toRem(60)};

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    width: 4rem;
    height: 4rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  display: block;
  clear: both;
  margin-bottom: ${toRem(30)};
  cursor: pointer;

  :hover {
    > p {
      color: ${props => props.theme.color.gray.ink};
    }

    > div > svg {
      opacity: 1;
    }
  }

  &.active {
    > p {
      color: ${props => props.theme.color.gray.ink};
      font-weight: 700;
    }

    > div > svg {
      opacity: 1;
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    text-align: center;
  }
`;

const NavIconWrapper = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: ${toRem(10)};

  svg {
    width: 100%;
    opacity: 0.76;
    ${ANIMATION.default}
  }
`;

const NavLinkText = styled.p`
  display: inline-block;
  vertical-align: top;
  ${TYPE.body.primary.subdued}
  margin-bottom: 0;
  ${ANIMATION.default}

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 7.5rem - 9.75rem);
  min-height: min-content;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    height: calc(100vh - 6.5rem - 3.75rem);
  }
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
              <NavIconWrapper>
                <Campaigns />
              </NavIconWrapper>
              <NavLinkText>Campaigns</NavLinkText>
            </NavLink>
            <NavLink className="active">
              <NavIconWrapper>
                <Contacts />
              </NavIconWrapper>
              <NavLinkText>Influencers</NavLinkText>
            </NavLink>
            <NavLink>
              <NavIconWrapper>
                <Profile />
              </NavIconWrapper>
              <NavLinkText>Profile</NavLinkText>
            </NavLink>
          </NavLinksContainer>
          <SettingsContainer>
            <NavLink>
              <NavIconWrapper>
                <Settings />
              </NavIconWrapper>
              <NavLinkText>Settings</NavLinkText>
            </NavLink>
            <NavLink>
              <NavIconWrapper>
                <LogOut />
              </NavIconWrapper>
              <NavLinkText>Log Out</NavLinkText>
            </NavLink>
          </SettingsContainer>
        </LinksContainer>
      </AdminHeaderWrapper>
    );
  }
}

export default AdminHeader;
