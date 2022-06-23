import styled from 'styled-components';

const Button = styled.button`
  background-color: hsl(348, 83%, 47%);
  color: #fff;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  transition: 250ms ease;
  cursor: pointer;
  &:hover{
    background-color: hsl(348, 83%, 57%);
  }
  &:active{
    background-color: hsl(348, 83%, 47%);
  }
`

export default Button;