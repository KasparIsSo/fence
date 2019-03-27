import Link from "next/link";
import styled from "styled-components";
import { PropTypes } from "react";
import Router from "next/router";

import MarketingNav from "./MarketingNav";

import { GRID, BREAKPOINTS } from "./styles/Layout";
import { toRem } from "./utils/unitConversion";
import TYPE from "./styles/Typography";
import ANIMATION from "./styles/Animation";
import ZINDEX from "./styles/Zindex";

import Logo from "react-svg-loader!../static/icons/brand/logo.svg";
import Campaigns from "react-svg-loader!../static/icons/nav/campaigns.svg";
import Contacts from "react-svg-loader!../static/icons/nav/contacts.svg";
import LogOut from "react-svg-loader!../static/icons/nav/logOut.svg";
import Profile from "react-svg-loader!../static/icons/nav/profile.svg";
import Settings from "react-svg-loader!../static/icons/nav/settings.svg";

const AdminHeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: ${toRem(200)};
  height: 100vh;
  min-height: min-content;
  background: ${props => props.theme.color.gray.white};
  box-shadow: ${props => props.theme.shadow.drop};
  padding: ${toRem(60)} ${toRem(40)};
  z-index: ${ZINDEX.header};

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
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    width: ${toRem(32)};
    height: ${toRem(32)};
    transform: translateX(${toRem(-4)});
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
  }

  componentDidMount() {
    let activeNavCategory = Router.route.split("/");
    activeNavCategory =
      activeNavCategory[1].charAt(0).toUpperCase() +
      activeNavCategory[1].slice(1);
    activeNavCategory
      ? document
          .getElementById("nav" + activeNavCategory)
          .classList.add("active")
      : null;
  }

  render() {
    return (
      <AdminHeaderWrapper>
        <LogoWrapper>
          <Link href="./">
            <Logo />
          </Link>
        </LogoWrapper>
        <LinksContainer>
          <NavLinksContainer>
            <NavLink id="navCampaigns">
              <NavIconWrapper>
                <Campaigns />
              </NavIconWrapper>
              <NavLinkText>Campaigns</NavLinkText>
            </NavLink>
            <NavLink id="navInfluencers" href="/influencers">
              <NavIconWrapper>
                <Contacts />
              </NavIconWrapper>
              <NavLinkText>Influencers</NavLinkText>
            </NavLink>
            <NavLink id="navProfile">
              <NavIconWrapper>
                <Profile />
              </NavIconWrapper>
              <NavLinkText>Profile</NavLinkText>
            </NavLink>
          </NavLinksContainer>
          <SettingsContainer>
            <NavLink id="navSettingss">
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
