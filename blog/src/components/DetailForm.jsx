import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./buttons/Button";
import { useState } from "react";
import {
  Container,
  TitleStyle,
  InputStyle,
  TextAreaStyle,
  ContentStyle,
  ContentButton,
} from "./style";
import EditForm from "./EditForm";

const DetailForm = () => {
  const state = useSelector(state => state.posting);
  const params = useParams();
  const [edit, setEdit] = useState(false);
  const [titleInput, setTitleInput] = useState(state[params.index].title);
  const [contentInput, setContentInput] = useState(state[params.index].content);
  console.log(titleInput, contentInput);

  return (
    <>
      {!edit ? (
        <Container>
          <TitleStyle>{titleInput}</TitleStyle>
          <ContentStyle>{contentInput}</ContentStyle>
          <div
            style={{
              backgroundColor: "red",
              height: "100px",
              weight: "100px",
            }}>
            게시글 보기 페이지
          </div>
          <ContentButton setEdit={setEdit} name="수정" />
        </Container>
      ) : (
        <>
          <EditForm />
          <div
            style={{
              backgroundColor: "blue",
              height: "100px",
              weight: "100px",
            }}>
            수정 페이지
          </div>
        </>
      )}
    </>
  );
};

export default DetailForm;

//const DetailForm = () => {
//   const state = useSelector(state => state.posting);
//   const params = useParams();
//   const [edit, setEdit] = useState(false);
//   const [titleInput, setTitleInput] = useState(state[params.index].title);
//   const [contentInput, setContentInput] = useState(state[params.index].content);
//   console.log(titleInput, contentInput);

//   return (
//     <Container>
//       {!edit ? (
//         <>
//           <TitleStyle>{titleInput}</TitleStyle>
//           <ContentStyle>{contentInput}</ContentStyle>
//           <div style={{backgroundColor:"red", height:"100px", weight:"100px"}}>ddddddddddddddddddddddddddddddddd</div>
//           {/* <ContentButton setEdit={setEdit} name="수정" /> */}
//         </>
//       ) : (
//         <>
//           <InputStyle
//             id="Title"
//             value={titleInput}
//             onChange={event => {
//               setTitleInput(event.target.value);
//             }}
//             type="text"
//           />
//           <TextAreaStyle
//             id="Content"
//             value={contentInput}
//             onChange={event => {
//               console.log(event.target.value);
//               setContentInput(event.target.value);
//             }}
//             type="text"
//           />
//           <div style={{backgroundColor:"red", height:"100px", weight:"100px"}}>ddddddddddddddddddddddddddddddddd</div>
//           {/* <ContentButton name="수정완료" /> */}
//         </>
//       )}
//       {/* {!edit ? (
//         <ContentButton setEdit={setEdit} name="수정" />
//       ) : (
//         <>
//         <ContentButton name="수정완료" />
//         </>
//       )} */}
//     </Container>
//   );
// };
