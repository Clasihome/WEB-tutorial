import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './header';
import Footer from './footer';

const theme = {
  base: "#333333",
  titleColor: "#346078",
  gray: "gray",
  primary: "#72ae18",
}

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Bitter', serif;
  }
  body{
    color: #333;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif;
  }
`

const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const Layout = ({ children }) => {

  return(
    <MainContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </MainContainer>
  )
}

export default Layout;