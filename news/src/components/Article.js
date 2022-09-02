import { useDispatch } from "react-redux";
import { newsSlice } from "../store/store";

const Article = ({ ele }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span onClick={() => {
        console.log('articles 중 이 뉴스 ', ele)
        dispatch(newsSlice.actions.clip(ele))}}>
        📌
      </span>
      <a href={ele.web_url}>{ele.headline.main}</a>
      <p>{ele.snippet}</p>
      <p>{ele.pub_date.slice(0, 10).replaceAll("-", ".")}</p>
      <br />
      <br />
    </div>
  );
};

export default Article;
