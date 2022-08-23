import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkS = styled(Link)`
  padding: 1em;
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: black;
  font-weight: bold;
  font-size: 28px;
`

const Nav = () => {
  return (
    <LinkS to = '/'>Blog</LinkS>
    
  )
}

export default Nav