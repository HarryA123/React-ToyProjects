import React from "react";
import { Header, Logo, NavInput, SearchButton } from "./styles";

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
        <SearchButton onClick={onSubmit}>검색</SearchButton>
      </form>
    </Header>
  );
};

export default HeaderComponent;
