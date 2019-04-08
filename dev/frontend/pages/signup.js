import Link from "next/link";
import styled from "styled-components";

import Signup from "../components/Signup";

const SignupWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SignupPage = props => (
  <>
    <SignupWrapper>
      <Signup />
    </SignupWrapper>
  </>
);

export default SignupPage;
