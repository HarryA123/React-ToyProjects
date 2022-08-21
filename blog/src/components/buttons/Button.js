import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Button = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.posting);
  const params = useParams();

  if (props.delete === "삭제") {
    return (
      <Link to={"/"}>
        <button
          onClick={() => {
            window.alert("삭제되었습니다.");
            return dispatch({
              type: "POST_DELETE",
              payload: state[params.index].title,
            });
          }}
        >
          {props.delete}
        </button>
      </Link>
    );
  }
};

export default Button;
