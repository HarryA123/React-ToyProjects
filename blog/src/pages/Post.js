import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Post = () => {
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');
  const titleInValid= titleInput.length >4 && titleInput.length < 30;
  const contentInValid= contentInput.length > 30
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  
  const titleChange = event => {
    setTitleInput(event.target.value)
  }
  const contentChange = event => {
    setContentInput(event.target.value)
  }
  const publishBtn = (event) => {
    if(!titleInValid){
      titleRef.current.focus()
      event.preventDefault()
    } else if(!contentInValid) {
      contentRef.current.focus()
      event.preventDefault()
    }
  };

  return (
    <>
      <h3>🖋Post 페이지</h3>
      <form>
        <div>
          <label htmlFor="Title">제목</label>
          <br/>
          <input id="Title" ref={titleRef} value={titleInput} onChange={titleChange} type="text" size={30} />
          <br/>
          {!titleInValid && '제목을 간결하게 작성해주세요.'}
        </div>
        <br/>
        <div>
          <label htmlFor="Content">내용</label>
          <br/>
          <input id="Content" ref={contentRef} value={contentInput} onChange={contentChange} type="text" size={70} />
          <br/>
          {!contentInValid && '내용을 간결하게 작성해주세요.'}
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