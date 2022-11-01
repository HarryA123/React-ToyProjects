import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkS = styled(Link)`
  padding: 12px 80px;
  position: fixed;
  top: 0;
  width: 100vh;
  background: -webkit-linear-gradient(#ec02a1, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: gray;
  font-size: 20px;
  font-weight: bold;
`;

const Nav = () => {
  return <LinkS to="/">Blog</LinkS>;
};

export default Nav;
