import Link from "next/link";
import styled from "styled-components";

import Signin from "../components/Signin";
import { BREAKPOINTS } from "../components/styles/Layout";
import { toRem } from "../components/utils/unitConversion";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-image: url("../static/images/background-pattern.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    padding: ${toRem(40)} 0;
  }
`;

const SigninPosition = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
  }
`;

const Home = props => (
  <BackgroundWrapper>
    <SigninPosition>
      <Signin />
    </SigninPosition>
  </BackgroundWrapper>
);

export default Home;
