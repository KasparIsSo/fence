import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Link from "next/link";

import { CURRENT_USER_QUERY } from "./User";
import TYPE from "./styles/Typography";
import { MARKETING_GRID, BREAKPOINTS } from "./styles/Layout";
import { toRem } from "./utils/unitConversion";

import Error from "./ErrorMessage";
import { CardContainer } from "./CardContainer";
import { TextFieldSimple } from "./TextField";
import Button from "./Button";

import Logo from "react-svg-loader!../static/icons/brand/logo.svg";

const SigninWrapper = styled.div`
  ${MARKETING_GRID.wrapper}
`;

const SigninContainer = styled.div`
  ${MARKETING_GRID.container}
`;

const SigninCard = styled(CardContainer)`
  grid-column: 2 / 12;
  padding: 2.5rem 5rem;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: 2 /8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: 1 /5;
    padding: 2rem;
  }
`;

const LogoWrapper = styled.div`
  grid-column: 4 /6;
  padding: ${toRem(20)};

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
    text-align: center;
    > svg {
      margin: 0 auto;
      width: ${toRem(80)};
      height: ${toRem(80)};
    }
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const SigninInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 1.5rem;
  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    /* grid-template-columns: repeat(4, 1fr); */
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SigninTextField = styled(TextFieldSimple)`
  grid-column: 3 /7;
  margin: 0;
  margin-bottom: ${toRem(20)};

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: 2 /8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const SigninButton = styled(Button)`
  display: block;
  margin: ${toRem(20)} auto 0;
`;

const SigninForgotPassword = styled.a`
  ${TYPE.caption.primary};
  grid-column: 3 /7;
  color: ${props => props.theme.color.blue.feature};
  cursor: pointer;
  margin-top: ${toRem(-10)};
  margin-bottom: ${toRem(20)};
  text-align: right;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: 2 /8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const SignupLink = styled.a`
  ${TYPE.caption.primary};
  color: ${props => props.theme.color.blue.feature};
  cursor: pointer;
  margin-top: ${toRem(20)};
  display: block;
  text-align: center;
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNin_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <SigninWrapper>
        <SigninContainer>
          <SigninCard>
            <Mutation
              mutation={SIGNIN_MUTATION}
              variables={this.state}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {(signin, { error, loading }) => {
                return (
                  <form
                    method="post"
                    onSubmit={async e => {
                      e.preventDefault();
                      await signin();
                      this.setState({ email: "", password: "" });
                    }}
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <Error error={error} />
                      <SigninInputWrapper>
                        <LogoWrapper>
                          <Logo />
                        </LogoWrapper>
                        <SigninTextField
                          label="Email"
                          labelFor="email"
                          type="email"
                          textInputName="email"
                          textInputPlaceholder="Enter your email"
                          inputType="secondary"
                          required
                          value={this.state.email}
                          onChange={this.saveToState}
                        />
                        <SigninTextField
                          label="Password"
                          labelFor="password"
                          type="password"
                          textInputName="password"
                          textInputPlaceholder="Enter your password"
                          inputType="secondary"
                          required
                          value={this.state.password}
                          onChange={this.saveToState}
                        />
                        <SigninForgotPassword>
                          Forgot your password?
                        </SigninForgotPassword>
                      </SigninInputWrapper>

                      <SigninButton buttonType="primary" type="submit">
                        Sign In
                      </SigninButton>
                    </fieldset>
                  </form>
                );
              }}
            </Mutation>
            <Link href={{ pathname: "/signup" }}>
              <SignupLink>
                Don't have an account? <b>Sign Up</b>
              </SignupLink>
            </Link>
          </SigninCard>
        </SigninContainer>
      </SigninWrapper>
    );
  }
}

export default Signin;
