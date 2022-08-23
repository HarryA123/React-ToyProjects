import { useState, useRef } from "react";
import styled from "styled-components";
import Button from "./buttons/Button";

const ContainerStyle = styled.div`
  height: 30em;
  /* border: 2px solid gray; */
  border-radius: 1em;
  padding: 1em;
  margin: 8em 20em 0;
  position: relative;
`;

const InputStyle = styled.input`
  margin: 0.4em auto;
  width: 100%;
  border: none;
  font-size: 28px;
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

const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 20em;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const CreateForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const titleInValid = titleInput.length > 0 && titleInput.length < 30;
  const contentInValid = contentInput.length > 0;
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const titleChange = (event) => {
    setTitleInput(event.target.value);
  };
  const contentChange = (event) => {
    setContentInput(event.target.value);
  };

  return (
    <ContainerStyle>
      <form>
        <InputStyle
          placeholder="Title"
          id="Title"
          ref={titleRef}
          value={titleInput}
          onChange={titleChange}
          type="text"
        />
        <TextAreaStyle
          placeholder="Content"
          id="Content"
          ref={contentRef}
          value={contentInput}
          onChange={contentChange}
          type="text"
        />
        <div>
          <Button
            contentInValid={contentInValid}
            titleInValid={titleInValid}
            contentRef={contentRef}
            titleRef={titleRef}
            publish={"올리기"}
            titleInput={titleInput}
            contentInput={contentInput}
          ></Button>
        </div>
      </form>
    </ContainerStyle>
  );
};

export default CreateForm;
