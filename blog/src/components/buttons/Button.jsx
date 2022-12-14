import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled(Link)`
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  background-color: #ec02a1;
  padding: 4px 12px;
`;

const Button = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.posting);
  const params = useParams();

  if (props.delete === "삭제") {
    return (
      <ButtonStyle
        to="/"
        onClick={() => {
          window.alert("삭제되었습니다.");
          return dispatch({
            type: "POST_DELETE",
            payload: state[params.index].title,
          });
        }}>
        {props.delete}
      </ButtonStyle>
    );
  } else if (props.write === "글쓰기") {
    return <ButtonStyle to="/post">{props.write}</ButtonStyle>;
  } else if (props.publish === "올리기") {
    const publishBtn = event => {
      if (!props.titleInValid) {
        props.titleRef.current.focus();
        event.preventDefault();
      } else if (!props.contentInValid) {
        props.contentRef.current.focus();
        event.preventDefault();
      } else {
        dispatch({
          type: "POST_SUCCESS",
          payload: {
            title: props.titleInput,
            content: props.contentInput,
          },
        });
      }
    };
    return (
      <ButtonStyle onClick={publishBtn} to="/">
        {props.publish}
      </ButtonStyle>
    );
  }
  // else if(props.edit === "수정"){
  //     return <ButtonStyle to="/edit">{props.edit}</ButtonStyle>;
  // }
  else if (props.modified === "수정완료") {
    const publishBtn = () => {
      return dispatch({
        type: "POST_EDIT_SUCCESS",
        payload: {
          index: params.index,
          title: props.titleInput,
          content: props.contentInput,
        },
      });
    };

    return (
      <ButtonStyle to="/" onClick={publishBtn}>
        {props.modified}
      </ButtonStyle>
    );
  }
};

export default Button;
