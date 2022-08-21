import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.posting);
  const params = useParams();
  const [titleInput, setTitleInput] = useState(state[params.index].title);
  const [contentInput, setContentInput] = useState(state[params.index].content);

  const publishBtn = () => {
    return dispatch({
      type: "POST_EDIT_SUCCESS",
      payload: {
        index: params.index,
        title: titleInput,
        content: contentInput,
      },
    });
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="Title">Title</label>
          <br />
          <input
            id="Title"
            value={titleInput}
            onChange={(event) => {
              setTitleInput(event.target.value);
            }}
            type="text"
          />
          <br />
        </div>
        <br />
        <div>
          <label htmlFor="Content">Content</label>
          <br />
          <textarea
            id="Content"
            value={contentInput}
            onChange={(event) => {
              setContentInput(event.target.value);
            }}
            type="text"
          />
          <br />
        </div>
        <div>
          <Link to="/">
            <button onClick={publishBtn}>Modify</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default EditForm;
