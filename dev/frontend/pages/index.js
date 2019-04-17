import Link from "next/link";
import styled from "styled-components";

import Signin from "../components/Signin";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-image: url("../static/images/background-pattern.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const SigninPosition = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Home = props => (
  <BackgroundWrapper>
    <SigninPosition>
      <Signin />
    </SigninPosition>
  </BackgroundWrapper>
);

export default Home;
