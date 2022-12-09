import "../Styles/Article.css";
import { useSelector, useDispatch } from "react-redux";
import { newsSlice } from "../store/store";

const Article = ({ ele }) => {
  const dispatch = useDispatch();
  const clips = useSelector(state => state.clips);
  // console.log(clips)
  return (
    <div className="news_Card">
      <span className="ClipIcon"
        onClick={() => {
          console.log("➡ articles 중 이 뉴스를 요청했습니다. ", ele);
          dispatch(newsSlice.actions.clip(ele));
        }}>
        {clips.includes(ele) ? "🔵" : "⚪"}
        {/* {만약 clip 배열에 기사가 포함되어 있으면 🔵, 배열에 없으면 ⚪ } */}
      </span>
      <a className="news_Headline" href={ele.web_url}>{ele.headline.main}</a>
      <div className="news_Snippet" >{ele.snippet}</div>
      <div className="news_Date" >{ele.pub_date.slice(0, 10).replaceAll("-", ".")}</div>
    </div>
  );
};

export default Article;
