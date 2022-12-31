import { useState, useRef } from "react";
import { Container, InputStyle, TextAreaStyle, ContentButton } from "./style";

const CreateForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const titleInValid = titleInput.length > 0 && titleInput.length < 30;
  const contentInValid = contentInput.length > 0;
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const titleChange = event => {
    setTitleInput(event.target.value);
  };
  const contentChange = event => {
    setContentInput(event.target.value);
  };

  return (
    <Container>
      <form>
        <InputStyle
          placeholder="제목을 입력해주세요"
          id="Title"
          ref={titleRef}
          value={titleInput}
          onChange={titleChange}
          type="text"
        />
        <TextAreaStyle
          placeholder="내용을 입력해주세요"
          id="Content"
          ref={contentRef}
          value={contentInput}
          onChange={contentChange}
          type="text"
        />
        <div>
          <ContentButton
            contentInValid={contentInValid}
            titleInValid={titleInValid}
            contentRef={contentRef}
            titleRef={titleRef}
            name="올리기"
            titleInput={titleInput}
            contentInput={contentInput}
            color="gray"/>
        </div>
      </form>
    </Container>
  );
};

export default CreateForm;
