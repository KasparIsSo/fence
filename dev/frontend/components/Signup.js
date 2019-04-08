import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import TYPE from "./styles/Typography";
import { MARKETING_GRID } from "./styles/Layout";
import { toRem } from "./utils/unitConversion";

import Error from "./ErrorMessage";
import { CardContainer } from "./CardContainer";
import { TextFieldSimple } from "./TextField";
import Button from "./Button";

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
`;

const LogoWrapper = styled.div`
  grid-column: 4 /6;
  padding: ${toRem(20)};
`;

const SignupInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 1.5rem;
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

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
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
    business: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
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
                      this.setState({ name: "", email: "", password: "" });
                    }}
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <Error error={error} />
                      <SignupInputWrapper>
                        <LogoWrapper>
                          <Logo />
                        </LogoWrapper>
                        <SignupTextField
                          label="First Name"
                          labelFor="name"
                          textInputName="name"
                          textInputPlaceholder="Enter their first name"
                          inputType="secondary"
                          required
                          value={this.state.name}
                          onChange={this.saveToState}
                        />
                        <SignupTextField
                          label="Business Name (Optional)"
                          labelFor="business"
                          textInputName="business"
                          textInputPlaceholder="Enter tyour business's name"
                          inputType="secondary"
                          value={this.state.business}
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
                        SignUp
                      </SignupButton>
                    </fieldset>
                  </form>
                );
              }}
            </Mutation>
          </SignupCard>
        </SignupContainer>
      </SignupWrapper>
    );
  }
}

export default Signup;
