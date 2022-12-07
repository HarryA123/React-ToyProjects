import React from "react";
import { Header, Logo, NavInput, SearchButton, Clips } from "./styles";

const HeaderComponent = ({ onSubmit, onChange, movieSearch }) => {
  return (
    <Header>
      <Logo to={"/"}>MOVIt</Logo>
      {window.location.pathname === "/" ? (
        <>
          <Clips to={"/Clip"}>나의 🤍</Clips>
          <form onSubmit={onSubmit}>
            <NavInput
              placeholder="Search..."
              type="text"
              onChange={onChange}
              value={movieSearch}
            />
            <SearchButton onClick={onSubmit}>검색</SearchButton>
          </form>
        </>
      ) : null}
    </Header>
  );
};

export default HeaderComponent;
