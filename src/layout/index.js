import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './header';

// #333333
// #884444
// #346078
// #758b4e

const theme = {
  base: "#333333",
  titleColor: "#346078",
  gray: "#884444",
  primary: "#72ae18",
}

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Bitter', serif;
    color: #333;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif;
  }
`

const Layout = ({ children }) => {

  return(
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <main>
          {children}
        </main>
      </ThemeProvider>
    </div>
  )
}

export default Layout;