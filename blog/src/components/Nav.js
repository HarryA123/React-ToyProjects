import React from "react";
// import Button from "./buttons/Button";
import { LinkS, Navigation, NavButton } from "./style";

const Nav = () => {
  return (
    <Navigation>
      <LinkS to="/">Blog</LinkS>
      <NavButton navButtonName="글쓰기" />
    </Navigation>
  );
};

export default Nav;
