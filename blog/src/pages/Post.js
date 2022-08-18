import { Link } from "react-router-dom";
import { useState } from "react";

const Post = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const titleChange = event => {
    setTitleInput(event.target.value)
  }
  const contentChange = event => {
    setContentInput(event.target.value)
  }
  const publishBtn = () => {
    console.log("글을 올렸습니다");
  };

  return (
    <>
      <h3>🖋Post 페이지</h3>
      <form>
        <div>
          <label htmlFor="Title">제목</label>
          <input id="Title" value={titleInput} onChange={titleChange} type="text" size={30} />
        </div>
        <div>
          <label htmlFor="Content">내용</label>
          <input id="Content" value={contentInput} onChange={contentChange} type="text" size={70} />
        </div>
        <div>
          <Link to="/">
            <button onClick={publishBtn}>올리기</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Post