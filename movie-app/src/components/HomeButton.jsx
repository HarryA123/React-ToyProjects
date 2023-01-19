import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Logo,
  MenuIcon,
  MenuCloseIcon,
  NavInput,
  LogoutButton,
  SideBarLink,
  SideBar,
  SideBarBox,
} from "./styles";
import { callMovies } from "../features/movieSlice";

const HeaderComponent = ({
  onSubmit,
  onChange,
  movieSearch,
  setMovieSearch,
}) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const isLogin = useSelector(state => state.user.isLogin);
  const dispatch = useDispatch();

  const handleLogo = () => {
    window.scrollTo(0, 0);
    setMovieSearch("");
    dispatch(
      callMovies({
        movieName: "",
        pageNumber: 1,
      })
    );
  };

  const handleLogout = e => {
    dispatch({ type: "user/loginState", isLogin: false });
    alert("로그아웃 되었습니다.");
  };
  const handleMenu = e => {
    setShowSideBar(!showSideBar);
  };

  const handleClip = e => {
    window.scrollTo(0, 0);
    if (!isLogin) {
      e.preventDefault();
      alert("로그인이 필요합니다.");
    } else {
      return;
    }
  };

  const handleWithdrwal = () => {
    dispatch({ type: "user/withdrawalUser" });
    alert("탈퇴되었습니다.")
  };

  return (
    <Header>
      <Logo onClick={handleLogo} to={"/"}>
        MOVIt
      </Logo>
      {window.location.pathname === "/" && (
        <>
          {showSideBar ? (
            <>
              <form onSubmit={onSubmit}>
                <NavInput
                  placeholder="Search..."
                  type="text"
                  onChange={onChange}
                  value={movieSearch}
                />
              </form>
              <MenuIcon
                onClick={handleMenu}
                width="20px"
                src={process.env.PUBLIC_URL + "/MenuBar.png"}
                alt="MenuBar"
              />
            </>
          ) : (
            <SideBar>
              <SideBarBox>
                <MenuCloseIcon
                  onClick={handleMenu}
                  width="20px"
                  src={process.env.PUBLIC_URL + "/MenuClose.png"}
                  alt="MenuBar"
                />
              </SideBarBox>
              <SideBarBox hover>
                <SideBarLink onClick={handleClip} to={"/Clip"}>
                  MyClips
                </SideBarLink>
              </SideBarBox>
              <SideBarBox hover>
                {isLogin ? (
                  <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                ) : (
                  <SideBarLink to={"/Login"}>로그인</SideBarLink>
                )}
              </SideBarBox>
              {isLogin && (
                <SideBarBox hover>
                  <LogoutButton onClick={handleWithdrwal}>
                    회원탈퇴
                  </LogoutButton>
                </SideBarBox>
              )}
            </SideBar>
          )}
        </>
      )}
    </Header>
  );
};

export default HeaderComponent;
