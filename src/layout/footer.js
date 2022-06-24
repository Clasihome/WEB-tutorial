import React from "react";
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${props => props.theme.titleColor};
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
  p{
    margin: 0;
  }
`

const FooterComponent = () => {

  return(
    <Footer>
      <p>
        &copy; {new Date().getFullYear()} all rights reserved
      </p>
      <p>
        Developed by clasihome
      </p>
    </Footer>
  );
}

export default FooterComponent;