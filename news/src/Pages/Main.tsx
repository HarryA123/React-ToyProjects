import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Article from "../components/Article";
import { getArticle, newsSlice } from "../store/store";
import { useInView } from "react-intersection-observer";
import "../Styles/Main.css";
import NavBar from "../components/NavBar";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Main = () => {
  const [value, setValue] = useState<string>("");
  const { ref, inView } = useInView();
  const articles = useAppSelector(state => state.articles);
  const isLoading = useAppSelector(state => state.isLoading);
  const searchHistory = useAppSelector(state => state.searchHistory);
  const dispatch = useAppDispatch();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const timer = useRef<number | null>(null)
  const nextPage = useRef(1);

  useEffect(() => {
    if (articles.length !== 0 && inView) {
      nextPage.current = nextPage.current + 1;
      dispatch(getArticle({ value: value, page: nextPage.current }));
    }
  }, [inView]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
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
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
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
          <div className="searchIcon" typeof="submit">
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
