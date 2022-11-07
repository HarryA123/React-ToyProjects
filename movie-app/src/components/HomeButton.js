import React from "react";
import { useParams } from "react-router-dom";
import { Header, Logo, NavInput, SearchButton, SearchForm } from "./styles";

const HeaderComponent = ({ onSubmit, onChange, movieSearch }) => {
  const param = useParams();
  return (
    <Header>
      <Logo to={"/"}>MOVIt</Logo>
      {typeof param.id === "string" ? null : (
        <form onSubmit={onSubmit}>
          <NavInput
            placeholder="Search..."
            type="text"
            onChange={onChange}
            value={movieSearch}
          />
          <SearchButton onClick={onSubmit}>검색</SearchButton>
        </form>
      )}
    </Header>
  );
};

export default HeaderComponent;
