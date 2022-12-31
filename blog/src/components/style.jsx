import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 80px;
  position: fixed;
  top: 0;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  background-color: white;
`;

export const LinkS = styled(Link)`
  color: #ec02a1;
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 80px;
`;

export const InputStyle = styled.input`
  width: 100%;
  border: none;
  border-bottom: 3px solid gray;
  margin-bottom: 16px;
  font-size: 20px;
  ::placeholder {
    font-weight: bolder;
  }
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const TitleStyle = styled.div`
  width: 100%;
  margin-bottom: 16px;
  border-bottom: 3px solid gray;
  font-size: 20px;
`;

export const TextAreaStyle = styled.textarea`
  width: 100%;
  height: calc(100vh - 250px);
  margin-bottom: 32px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const ContentStyle = styled.p`
  margin-bottom: 32px;
`;

export const ButtonStyle = styled(Link)`
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  background-color: #ec02a1;
  padding: 4px 12px;
`;

export const ButtonStyle2 = styled(Link)`
  color: white;
  /* border-radius: 4px; */
  /* cursor: pointer; */
  /* font-size: 12px; */
  /* font-weight: bold; */
  background-color: red;
`;

export const ContentButtonStyle = styled.div`
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  background-color: purple;
  padding: 4px 12px;
`;

export const NavButton = ({ navButtonName }) => {
  return <ButtonStyle to="/post">{navButtonName}</ButtonStyle>;
};

export const ContentButton = ({
  name,
  titleInValid,
  titleRef,
  contentInValid,
  contentRef,
  titleInput,
  contentInput,
  // setAllForm,
  setEdit,
}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.posting);
  const params = useParams();

  if (name === "올리기") {
    const publishBtn = event => {
      if (!titleInValid) {
        titleRef.current.focus();
        event.preventDefault();
      } else if (!contentInValid) {
        contentRef.current.focus();
        event.preventDefault();
      } else {
        dispatch({
          type: "POST_SUCCESS",
          payload: {
            // index: params.index,
            title: titleInput,
            content: contentInput,
          },
        });
      }
    };
    return (
      <ButtonStyle2 onClick={publishBtn} to="/">
        {name}
      </ButtonStyle2>
    );
  } else if (name === "수정") {
    return (
      <ContentButtonStyle
        onClick={() => {
          console.log("수정 버튼 누름!!!!!");
          setEdit(true);
        }}>
        {name}
      </ContentButtonStyle>
    );
  } else if (name === "수정완료") {
    const publishBtn = () => {
      console.log("수정완료가 실행되었따~");
      console.log('1111',state)
      return dispatch({
        type: "POST_EDIT_SUCCESS",
        payload: {
          index: params.index,
          title: state.titleInput,
          content: state.contentInput,
        },
      });
    };

    return (
      <ButtonStyle to="/" onClick={publishBtn}>
        {name}
      </ButtonStyle>
    );
  }
};

// export const ContentButton = (props) => {
//   const dispatch = useDispatch();
//   const state = useSelector(state => state.posting);
//   const params = useParams();
//   console.log("🦺어떤 프롭스가 있냐",props);

//   if (props.delete === "삭제") {
//     return (
//       <ButtonStyle
//         to="/"
//         onClick={() => {
//           window.alert("삭제되었습니다.");
//           return dispatch({
//             type: "POST_DELETE",
//             payload: state[params.index].title,
//           });
//         }}>
//         {props.delete}
//       </ButtonStyle>
//     );
//     // }
//     //  else if (props.write === "글쓰기") {
//     //   return <ButtonStyle to="/post">{props.write}</ButtonStyle>;
//   } else if (props.publish === "올리기") {
//     const publishBtn = event => {
//       if (!props.titleInValid) {
//         props.titleRef.current.focus();
//         event.preventDefault();
//       } else if (!props.contentInValid) {
//         props.contentRef.current.focus();
//         event.preventDefault();
//       } else {
//         dispatch({
//           type: "POST_SUCCESS",
//           payload: {
//             title: props.titleInput,
//             content: props.contentInput,
//           },
//         });
//       }
//     };
//     return (
//       <ButtonStyle onClick={publishBtn} to="/">
//         {props.publish}
//       </ButtonStyle>
//     );
//     // }
//     // else if (props.edit === "수정") {
//     //   return (
//     //     <ButtonStyle onClick={props.change} to="/edit">
//     //       {props.edit}
//     //     </ButtonStyle>
//     //   );
//   }
// else if (props.modified === "수정완료") {
//     const publishBtn = () => {
//       return dispatch({
//         type: "POST_EDIT_SUCCESS",
//         payload: {
//           index: params.index,
//           title: props.titleInput,
//           content: props.contentInput,
//         },
//       });
//     };

//     return (
//       <ButtonStyle to="/" onClick={publishBtn}>
//         {props.modified}
//       </ButtonStyle>
//     );
//   }
// };
