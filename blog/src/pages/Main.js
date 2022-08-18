import { Link } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const writeBtn = () => {};
  const [postList, setPostList] = useState([])
  return (
    <>
      <h1>🧁Blog🍹</h1>
      <h3>Main 페이지</h3>
      <Link to="/post">
        <button onClick={writeBtn}>글쓰기</button>
      </Link>
      <ul>
        <div>{postList}</div>
      </ul>
    </>
  );
};

export default Main