import Link from "next/link";
import styled from "styled-components";

import Signup from "../components/Signup";
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

const SignupPosition = styled.div`
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

const SignupPage = props => (
  <>
    <BackgroundWrapper>
      <SignupPosition>
        <Signup />
      </SignupPosition>
    </BackgroundWrapper>
  </>
);

export default SignupPage;
