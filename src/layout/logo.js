import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import logoImg from '../images/logo.svg';

const LinkCustom = styled(Link)`

`

const Logo = styled.img`
  width: 250px;
`

const LogoCompoenent = () => {

  return(
    <LinkCustom to="/">
      <Logo
        src={logoImg}
      />
    </LinkCustom>
  )
}

export default LogoCompoenent;