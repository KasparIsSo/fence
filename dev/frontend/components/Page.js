import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Meta from "../components/Meta";

import { toRem } from "./utils/unitConversion";
import THEME from "./styles/Theme";

import User from "./User";

// import Background from "../static/images/background-pattern.jpg";
// import Background from "../static/images/background-pattern.jpg";

const theme = THEME;

const StyledPage = styled.div`
  color: ${props => props.theme.color.gray.ink};
  /* padding-top: 6.875rem; */
  padding-top: ${toRem(100)};
  /* background-image: url(${Background}); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../static/images/background-pattern.jpg');
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700|Lato:400,400i,700');

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    background-color: ${theme.color.cream};
    font-family: 'Lato', 'sans-serif';

    &.modalOpen {
      overflow-y: hidden;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.color.gray.ink}; 
  }
  fieldset {
    border: none;
    padding: 0;
    margin: 0;

    :disabled {
      opacity: .5;
    }
  }
`;

class Page extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <StyledPage>
            <Meta />
            {/* <AdminHeader /> */}
            <User>
              {({ data: { loggedInUser } }) => {
                console.log(loggedInUser);
                if (loggedInUser) return <p>{loggedInUser.name}</p>;
                return null;
              }}
            </User>
            {/* {this.state.loggedIn ? <AdminHeader /> : <Header />} */}
            {this.props.children}
          </StyledPage>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;
