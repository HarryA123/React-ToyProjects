import React, { useState } from "react";
import axios from "axios";
import { useDispatch  }from 'react-redux';
import { newsSlice } from "../store/store";
import { Link } from 'react-router-dom';

const Main = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  // const isClipped = useSelector((state)=>state.news.isClipped)

  const api = async (searchKeyword, page=1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchKeyword}&page=${page}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`
      );
      // console.log(response)
      setArticles(response.data.response.docs);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  // const onClick = ()=>{
  //   api()
  //   console.log('click으로 api를 호출했습니다. 잠시만 기다리세요!')
  // }

  const onChange = (e)=>{
    console.log('타이핑을 하고 있습니다!')
    console.log(e.target.value)
    setValue(e.target.value)
  }
  const onSubmit =(e)=>{
    if(value){
      e.preventDefault()
      console.log('1. preventDefault로 새로고침 막기 성공!')
      api(value)
      console.log('2. enter 또는 click을 하셨군요! submit으로 api를 호출했습니다!')
      setValue('')
      console.log('3. 검색창이 reset 되었습니다!')
      } else{
        e.preventDefault()
        console.log('1. 검색창이 비었어요. ')
      }
    
  }
  const clipBtn = ()=>{
    dispatch(newsSlice.actions.clip())
  }

  return (
    <>
      <h1>🌏New World News🌍</h1>
      <form onSubmit={onSubmit}>
      <input 
      value={value}
      onChange={onChange}
      
      />
      <button> click</button>
      </form>
      <Link to={'/clip'}><button>clips📌</button></Link>
      <h2>{loading ? "뉴스를 불러오고 있습니다📰" : null}</h2>
      <div>
        {articles && articles.map((ele) => (
          <div key={ele._id}>
            <span onClick={clipBtn}> 📌</span><strong>{ele.headline.main}</strong>
            <p>{ele.lead_paragraph}</p>
            <p>{ele.pub_date.slice(0,10).replaceAll('-','.')}</p>
            <br/><br/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
