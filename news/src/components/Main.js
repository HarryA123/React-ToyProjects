import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Article from "./Article";
import { getArticle, newsSlice } from "../store/store";
import { HistoryList, HistoryBox } from "./style";

const Main = () => {
  const [value, setValue] = useState("");
  const articles = useSelector((state) => state.news.articles);
  const isLoading = useSelector((state) => state.news.isLoading);
  const searchHistory = useSelector((state) => state.news.searchHistory);
  // const searchHistory = useSelector(state=>state.news.searchHistory);
  const dispatch = useDispatch();
  
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    console.log("articles는 ", articles, "isLoading은 ", isLoading);
    if (value) {
      e.preventDefault();
      dispatch(getArticle({ value: value, page: 1 }));
      if (searchHistory.includes(value)) {
        dispatch(newsSlice.actions.history(value));
      } else {
        dispatch(newsSlice.actions.historyUpdate(value));
      }
      setValue("");
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      <h1>🌏New World News🌍</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button> click</button>
      </form>
      <HistoryBox>
        {searchHistory &&
          [...searchHistory]
            .reverse()
            .map((ele) => {
            return <HistoryList key={ele}>{ele}</HistoryList>})}
      </HistoryBox>
      <Link to={"/clips"}><button>clips📌</button></Link>
      <h2>{isLoading ? "뉴스를 불러오고 있습니다📰" : null}</h2>
      <div>
        {articles && articles.map((ele) => <Article key={ele._id} ele={ele} />)}
      </div>
    </>
  );
};

export default Main;
