import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./buttons/Button";

const Container = styled.div`
  height: 30em;
  border-radius: 1em;
  padding: 1em;
  margin: 8em 20em 0;
  position: relative;
`

const InputStyle = styled.input`
  margin: 0.4em auto;
  width: 100%;
  border: none;
  font-size: 28px;
  ::placeholder{
    font-weight: bolder;
  }
  &:focus{
    outline: none;
  }
  &:focus::placeholder{
    color: transparent;
  }
`

const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 20em;
  border: none;
  resize: none;
  &:focus{
    outline: none;
  }
  &:focus::placeholder{
    color: transparent;
  }
`

const EditForm = () => {
  const state = useSelector((state) => state.posting);
  const params = useParams();
  const [titleInput, setTitleInput] = useState(state[params.index].title);
  const [contentInput, setContentInput] = useState(state[params.index].content);

  return (
    <>
    <Container>
        <div>
          <InputStyle
            id="Title"
            value={titleInput}
            onChange={(event) => {
              setTitleInput(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <TextAreaStyle
            id="Content"
            value={contentInput}
            onChange={(event) => {
              setContentInput(event.target.value);
            }}
            type="text"
          />
        </div>
          <Button titleInput={titleInput} contentInput={contentInput}  modified={'수정완료'}></Button>
      </Container>
    </>
  );
};

export default EditForm;
