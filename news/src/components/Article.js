import "../Styles/Article.css";
import { useSelector, useDispatch } from "react-redux";
import { newsSlice } from "../store/store";

const Article = ({ ele }) => {
  const dispatch = useDispatch();
  const clips = useSelector(state => state.clips);
  return (
    <div className="news_Card">
      <span className="ClipIcon"
        onClick={() => {
          dispatch(newsSlice.actions.clip(ele));
        }}>
        {clips.includes(ele) ? "🔵" : "⚪"}
      </span>
      <a className="news_Headline" href={ele.web_url}>{ele.headline.main}</a>
      <div className="news_Snippet" >{ele.snippet}</div>
      <div className="news_Date" >{ele.pub_date.slice(0, 10).replaceAll("-", ".")}</div>
    </div>
  );
};

export default Article;
