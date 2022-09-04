import { useSelector, useDispatch } from "react-redux";
import { newsSlice } from "../store/store";
import { ClipIcon } from "./style";


const Article = ({ ele }) => {
  const dispatch = useDispatch();
  const clips = useSelector(state => state.clips)
  // console.log(clips)
  return (
    <>
      <ClipIcon onClick={() => {
        console.log('➡ articles 중 이 뉴스를 요청했습니다. ', ele)
        dispatch(newsSlice.actions.clip(ele))}}>
        {clips.includes(ele) ? '🔵' :'⚪' }
        {/* {만약 clip 배열에 기사가 포함되어 있으면 🔵, 배열에 없으면 ⚪ } */}
      </ClipIcon>
      <a href={ele.web_url}>{ele.headline.main}</a>
      <p>{ele.snippet}</p>
      <p>{ele.pub_date.slice(0, 10).replaceAll("-", ".")}</p>
      <br />
      <br />
    </>
  );
};

export default Article;
