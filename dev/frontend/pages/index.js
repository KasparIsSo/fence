import Link from "next/link";
import styled from "styled-components";

import Signup from "../components/Signup";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-image: url("../static/images/background-pattern.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const SignupPosition = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Home = props => (
  <BackgroundWrapper>
    <SignupPosition>
      <Signup />
    </SignupPosition>
  </BackgroundWrapper>
);

export default Home;
