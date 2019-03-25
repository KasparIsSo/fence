import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import AdminHeader from "./AdminHeader";
import Button from "./Button";
// import Meta from "../components/Meta";

import THEME from "./styles/Theme";

const theme = THEME;

const StyledPage = styled.div`
  color: ${props => props.theme.color.gray.ink};
  padding-top: 6.875rem;
`;

const Inner = styled.div`
  /* max-width: ${props => props.theme.maxWidth}; */
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700|Lato:400,700');

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
  }
  a {
    text-decoration: none;
    color: ${theme.color.gray.ink}; 
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <StyledPage>
            <AdminHeader />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;
