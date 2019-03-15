import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import { PropTypes } from "react";

import Nav from "./Nav";

import { GRID, BREAKPOINTS } from "./styles/Layout";
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

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  ${ANIMATION.default}

  &.scrolled {
    background-color: ${props => props.theme.color.gray.white};
  }
`;

const HeaderContainer = styled.div`
  ${GRID.container}
  padding: 1rem 0;
`;

const LogoWrapper = styled.div`
  grid-column: 1 /3;
  max-width: 5rem;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: 1 /3;
    max-width: 5rem;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: 1 /2;
  }
`;

class Header extends React.Component {
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
      <HeaderWrapper
        className={this.state.navBackgroundWhite ? "scrolled" : null}
      >
        <HeaderContainer>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Nav />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;

// <div className="bar">
//     </div>

// <Link href="/">
//         <a>Sick Fits</a>
//       </Link>
