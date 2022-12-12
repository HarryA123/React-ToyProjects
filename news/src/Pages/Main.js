import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Article from "../components/Article";
import { getArticle, newsSlice } from "../store/store";
import { useInView } from "react-intersection-observer";
import "../Styles/Main.css";
import NavBar from "../components/NavBar";

const Main = () => {
  const [value, setValue] = useState("");
  const { ref, inView } = useInView();
  const articles = useSelector(state => state.articles);
  const isLoading = useSelector(state => state.isLoading);
  const searchHistory = useSelector(state => state.searchHistory);
  const dispatch = useDispatch();
  const timer = useRef(null);
  const nextPage = useRef(1);

  useEffect(() => {
    if (articles.length !== 0 && inView) {
      nextPage.current = nextPage.current + 1;
      dispatch(getArticle({ value: value, page: nextPage.current }));
    }
  }, [inView]);

  const onChange = e => {
    setValue(e.target.value);
    if (e.target.value) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (e.target.value) {
          e.preventDefault();
          dispatch(newsSlice.actions.clearArticles());
          dispatch(getArticle({ value: e.target.value, page: 1 }));
          if (searchHistory.includes(e.target.value)) {
            dispatch(newsSlice.actions.history(e.target.value));
          } else {
            dispatch(newsSlice.actions.historyUpdate(e.target.value));
          }
        } else {
          e.preventDefault();
        }
      }, 2000);
    }
    return;
  };
  const onSubmit = e => {
    if (value) {
      e.preventDefault();
      dispatch(getArticle({ value: value, page: 1 }));
      if (searchHistory.includes(value)) {
        dispatch(newsSlice.actions.history(value));
      } else {
        dispatch(newsSlice.actions.historyUpdate(value));
      }
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <form className="search-input" onSubmit={onSubmit}>
          <input
            autoFocus
            type="text"
            autoComplete="on"
            value={value}
            onChange={onChange}
          />
          <div className="autocom-box">
            {searchHistory &&
              [...searchHistory].reverse().map(ele => {
                return <li key={ele}>{ele}</li>;
              })}
          </div>
          <div className="searchIcon" type="submit">
            검색
          </div>
        </form>
      </div>
      {isLoading ? <span className="loader"></span> : null}
      <div className="Article_Container">
        {articles && articles.map(ele => <Article key={ele._id} ele={ele} />)}
      </div>
      <div ref={ref}></div>
    </>
  );
};

export default Main;
