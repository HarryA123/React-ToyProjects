import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Logo,
  NavInput,
  LoginButton,
  SearchButton,
  LogoutButton,
  Clips,
} from "./styles";

const HeaderComponent = ({ onSubmit, onChange, movieSearch }) => {
  const isLogin = useSelector(state => state.user.isLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "user/loginState", isLogin: false });
    alert("로그아웃 되었습니다.");
  };

  return (
    <Header>
      <Logo to={"/"}>MOVIt</Logo>
      {window.location.pathname === "/" && (
        <>
          <Clips to={"/Clip"}>My Clips</Clips>
          <form onSubmit={onSubmit}>
            <NavInput
              placeholder="Search..."
              type="text"
              onChange={onChange}
              value={movieSearch}
            />
            <SearchButton onClick={onSubmit}>검색</SearchButton>
          </form>
          {isLogin ? (
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          ) : (
            <LoginButton to={"/Login"}>로그인</LoginButton>
          )}
        </>
      )}
    </Header>
  );
};

export default HeaderComponent;
