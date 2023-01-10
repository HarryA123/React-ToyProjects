import React from "react";
import {
  Header,
  Logo,
  NavInput,
  LoginButton,
  SearchButton,
  Clips,
} from "./styles";

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
      <LoginButton to={"/Login"}>💕로그인</LoginButton>
    </Header>
  );
};

export default HeaderComponent;
