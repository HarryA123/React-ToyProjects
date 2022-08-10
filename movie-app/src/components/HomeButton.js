import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

export default function HomeButton() {


  const Header = styled.div`
  height: 44px;
  position: fixed;
  top:0;
  background-color: black;
  width: 100%;
  line-height: 2;
  border-bottom: 1px;
  `

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: red;
    font-weight: bold;
    font-size: 22px;
    margin: 2em;
    
    &:focus, &:hover{
      color: white;
    };
    &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

  return (
    <Header>
      <StyledLink to={'/'}>MOVIt</StyledLink>
    </Header>
  )
}
