import React from "react";
import { Header, Logo, NavInput } from "./styles";

const HeaderComponent = ({ onSubmit, onChange, movieSearch }) => {
  return (
    <Header>
      <Logo to={"/"}>MOVIt</Logo>
      <form onSubmit={onSubmit}>
        <NavInput
          placeholder="Search"
          type="text"
          onChange={onChange}
          value={movieSearch}
        />
      </form>
    </Header>
  );
};

export default HeaderComponent;
