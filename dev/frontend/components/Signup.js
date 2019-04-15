import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";

import TYPE from "./styles/Typography";
import { MARKETING_GRID, BREAKPOINTS } from "./styles/Layout";
import { toRem } from "./utils/unitConversion";

import Error from "./ErrorMessage";
import { CardContainer } from "./CardContainer";
import { TextFieldSimple } from "./TextField";
import Button from "./Button";
import User from "./User";

import Logo from "react-svg-loader!../static/icons/brand/logo.svg";

const SignupWrapper = styled.div`
  ${MARKETING_GRID.wrapper}
`;

const SignupContainer = styled.div`
  ${MARKETING_GRID.container}
`;

const SignupCard = styled(CardContainer)`
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

const SignupInputWrapper = styled.div`
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

const SignupTextField = styled(TextFieldSimple)`
  grid-column: span 4;
  margin: 0;
  margin-bottom: ${toRem(20)};
`;

const SignupButton = styled(Button)`
  display: block;
  margin: ${toRem(20)} auto 0;
`;

const SigninLink = styled.a`
  ${TYPE.caption.primary};
  color: ${props => props.theme.color.blue.feature};
  cursor: pointer;
  margin-top: ${toRem(20)};
  display: block;
  text-align: center;
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $businessName: String
    $email: String!
    $password: String!
  ) {
    signup(
      name: $name
      businessName: $businessName
      email: $email
      password: $password
    ) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    businessName: "",
    loggedIn: false
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    if (this.state.loggedIn) {
      Router.push({
        pathname: "/influencers"
      });
    }
  }
  render() {
    return (
      <User>
        {({ data: { loggedInUser } }) => (
          <>
            {loggedInUser ? this.setState({ loggedIn: true }) : null}
            <SignupWrapper>
              <SignupContainer>
                <SignupCard>
                  <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
                    {(signup, { error, loading }) => {
                      return (
                        <form
                          method="post"
                          onSubmit={async e => {
                            e.preventDefault();
                            await signup();
                            // this.setState({ name: "", email: "", password: "" });
                            Router.push({
                              pathname: "/influencers"
                            });
                          }}
                        >
                          <fieldset disabled={loading} aria-busy={loading}>
                            <Error error={error} />
                            <SignupInputWrapper>
                              <LogoWrapper>
                                <Logo />
                              </LogoWrapper>
                              <SignupTextField
                                label="Name"
                                labelFor="name"
                                textInputName="name"
                                textInputPlaceholder="Enter your name"
                                inputType="secondary"
                                required
                                value={this.state.name}
                                onChange={this.saveToState}
                              />
                              <SignupTextField
                                label="Business Name (Optional)"
                                labelFor="businessName"
                                textInputName="businessName"
                                textInputPlaceholder="Enter your business's name"
                                inputType="secondary"
                                value={this.state.businessName}
                                onChange={this.saveToState}
                              />
                              <SignupTextField
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
                              <SignupTextField
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
                            </SignupInputWrapper>

                            <SignupButton buttonType="primary" type="submit">
                              Sign Up
                            </SignupButton>
                          </fieldset>
                        </form>
                      );
                    }}
                  </Mutation>
                  <Link href={{ pathname: "/signin" }}>
                    <SigninLink>
                      Already have an account? <b>Sign In</b>
                    </SigninLink>
                  </Link>
                </SignupCard>
              </SignupContainer>
            </SignupWrapper>
          </>
        )}
      </User>
    );
  }
}

export default Signup;
