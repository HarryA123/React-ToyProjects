import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Article from "./Article";
import { getArticle, newsSlice} from "../store/store";
import { HistoryList, HistoryBox } from "./style";
import { useInView } from "react-intersection-observer";


const Main = () => {
  const [value, setValue] = useState("");
  const { ref, inView } = useInView();
  const articles = useSelector((state) => state.articles);
  const isLoading = useSelector((state) => state.isLoading);
  const searchHistory = useSelector((state) => state.searchHistory);
  // const searchHistory = useSelector(state=>state.news.searchHistory);
  const dispatch = useDispatch();
  const timer = useRef(null)
  const nextPage = useRef(1)
  console.log(inView)

  // 바닥을 쳐서 true가 되면 page++ 하나씩 늘어나게 api 디스패치 보내기.
  useEffect(()=>{
    if(articles.length !== 0 && inView){
      nextPage.current = nextPage.current+1
      dispatch(getArticle({value: value, page:nextPage.current}))
    }
  },[inView]);

  // 타이핑하고 2초통안 움직이지 않으면(2초 후) submit이 발생하고,
  // submit 발생하면서 api호출해 기사를 불러오고,
  // 검색키워드를 store로 보내 히스토리 배열에 넣는다. 


// 타이핑을 치면 2초 뒤에 서밋이 된다.

  const onChange = (e) => {
    console.log('timer는...........',timer)
    console.log(e.target.value);
    console.log(e);
    setValue(e.target.value);
    console.log(e.target.value)

    console.log(!e.target.value)
    if(e.target.value){
      console.log('2초 뒤 서밋 시작')
      clearTimeout(timer.current)
      timer.current = setTimeout(()=>{
        if (e.target.value) {
          //이벤트 타이핑을 했을 경우.
          e.preventDefault();
          dispatch(newsSlice.actions.clearArticles())
          dispatch(getArticle({ value: e.target.value, page: 1 }));
          if (searchHistory.includes(e.target.value)) {
            dispatch(newsSlice.actions.history(e.target.value));
          } else {
            dispatch(newsSlice.actions.historyUpdate(e.target.value));
          }
        } else {
          //이벤트 타이핑을 하지 않았을 경우.
          e.preventDefault();
        }
      }, 2000)
      // 만약 e.target.value가 없으면, 2초 뒤 서밋.
    } else{
      console.log(typeof(value))
      console.log('음...')
    }

  };
  const onSubmit = (e) => {
    console.log("articles는 ", articles, "isLoading은 ", isLoading);
    console.log(e.target.value)
    // const value = e.target.value;
    // console.log(value)
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
      <h1>🌏New World News🌍</h1>
      <form onSubmit={onSubmit}>
        <input autoFocus type = 'text' autoComplete='on' value={value} onChange={onChange} />
        <button type='submit'> click</button>
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
      <div >
        {articles && articles.map((ele) => <Article key={ele._id} ele={ele} />)}
      </div>
      <div ref={ref} >-</div>
    </>
  );
};

export default Main;
