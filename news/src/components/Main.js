import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Article from "./Article";
import { getArticle, newsSlice } from "../store/store";
import { HistoryList } from "./style";

const Main = () => {
  const [value, setValue] = useState("");
  const articles = useSelector((state) => state.news.articles);
  const isLoading = useSelector((state) => state.news.isLoading);
  const searchHistory = useSelector((state) => state.news.searchHistory);
  // const searchHistory = useSelector(state=>state.news.searchHistory);
  console.log("articles는 ", articles, "isLoading은 ", isLoading);
  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    // const booGi = setTimeout(() => {
    //   dispatch(getArticle({value:value, page:1}))
    //   clearTimeout(booGi)
    // }, 500);
    // booGi()
  };
  const onSubmit = (e) => {
    if (value) {
      e.preventDefault();
      console.log("1. preventDefault로 새로고침 막기 성공!");
      dispatch(getArticle({ value: value, page: 1 }));
      console.log(
        "2. ➡enter 또는 click을 하셨군요! submit으로 api를 호출했습니다!"
      );
      if (searchHistory.includes(value)) {
        dispatch(newsSlice.actions.history(value));
      } else {
        dispatch(newsSlice.actions.historyUpdate(value));
      }
      setValue("");
      console.log("3. 검색창이 reset 되었습니다!");
    } else {
      e.preventDefault();
      console.log("1. 검색창이 비었어요. ");
    }
  };

  return (
    <>
      <h1>🌏New World News🌍</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button> click</button>
      </form>
      <HistoryList>
        {searchHistory &&
          [...searchHistory]
            .reverse()
            .map((ele) => {
            return <div key={ele}>{ele}</div>})}
      </HistoryList>
      <button>clips📌</button>
      <Link to={"/clips"}></Link>
      <h2>{isLoading ? "뉴스를 불러오고 있습니다📰" : null}</h2>
      <div>
        {articles && articles.map((ele) => <Article key={ele._id} ele={ele} />)}
      </div>
    </>
  );
};

export default Main;
