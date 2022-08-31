import { useDispatch } from "react-redux";
import { newsSlice } from "../store/store";

const Article = ({ ele }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span onClick={() => dispatch(newsSlice.actions.clip({ id: ele._id }))}>
        📌
      </span>
      <a href={ele.web_url}>{ele.headline.main}</a>
      <p>{ele.lead_paragraph}</p>
      <p>{ele.pub_date.slice(0, 10).replaceAll("-", ".")}</p>
      <br />
      <br />
    </div>
  );
};

export default Article;
