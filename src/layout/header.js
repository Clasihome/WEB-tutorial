import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = styled.header`
  background-color: ${props => props.theme.primary};
  padding: 1rem;
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
`

const HeaderComponent = () => {

  return(
    <Header>
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
    </Header>
  )
}

export default HeaderComponent;