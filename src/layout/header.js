import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container } from 'react-grid-system';
import Logo from '../layout/logo';

const Header = styled.header`
  //background-color: ${props => props.theme.primary};
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavigationBar = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`

const NavItem = styled.li`
  padding: 0 .5rem;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: 250ms ease;
  &:hover{
    color: ${props => props.theme.primary};
  }
`

const HeaderComponent = () => {

  return(
    <Header>
      <Container>
        <NavContainer>
          <Logo />
          <NavigationBar>
            <NavItem>
              <NavLink to="/">
                Inicio
              </NavLink>
            </NavItem>        
            <NavItem>
              <NavLink to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/properties">
                properties
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">
                contact
              </NavLink>
            </NavItem>                
          </NavigationBar>
        </NavContainer>
      </Container>
    </Header>
  )
}

export default HeaderComponent;