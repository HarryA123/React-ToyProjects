import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import { useState } from 'react';

const ContainerStyle = styled.div`
  border-radius: 1em;
  padding: 1em;
  margin: 8em 20em 0;
  position: relative;
`

const TitleStyle = styled.h1`
  margin: 0.4em auto;
  width: 100%;
  border: none;
  font-size: 28px;
`

const ContentStyle = styled.p`
  width: auto;
  height: 20em;
  border: none;
  margin: 2em auto;
  overflow-wrap: break-word;
`

const ButtonStyle = styled.button`
  padding: 0;
  border: none;
  border-radius: 0.4em;
  background-color: black;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 8em;
  bottom: 2em;
  font-size: 14px;
  width: 67px;
  height: 36px;
`;

const DetailForm = (props) => {
  const state = useSelector(state=>state.posting);
  const params = useParams();
  const [modifyDisplay, setModifyDisplay] = useState('')

  const onClick =()=>{
    props.setAllForm(false)
    setModifyDisplay('none')
    return
  }
  return (
    <>
      <ContainerStyle>
        <TitleStyle>{state[params.index].title}</TitleStyle>
        <ContentStyle>{state[params.index].content}</ContentStyle>
        <Button delete={'삭제'}/>
        <ButtonStyle style={{display:modifyDisplay}} onClick={onClick}>수정</ButtonStyle>
      </ContainerStyle>
    </>
  )
}

export default DetailForm