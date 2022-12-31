import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, InputStyle, TextAreaStyle } from "./style";

const EditForm = () => {
  const state = useSelector(state => state.posting);
  const params = useParams();
  const [titleInput, setTitleInput] = useState(state[params.index].title);
  const [contentInput, setContentInput] = useState(state[params.index].content);

  return (
    <Container>
      <InputStyle
        id="Title"
        value={titleInput}
        onChange={event => {
          setTitleInput(event.target.value);
        }}
        type="text"
      />
      <TextAreaStyle
        id="Content"
        value={contentInput}
        onChange={event => {
          setContentInput(event.target.value);
        }}
        type="text"
      />
      {/* <Button
        titleInput={titleInput}
        contentInput={contentInput}
        modified={"수정완료"}/> */}
    </Container>
  );
};

export default EditForm;
