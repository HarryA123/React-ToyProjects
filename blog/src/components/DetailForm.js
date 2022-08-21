import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Button from './buttons/Button';

const DetailForm = () => {
  const state = useSelector(state=>state.posting);
  const params = useParams();
  return (
    <>
      <h3>{state[params.index].title}</h3>
      <p>{state[params.index].content}</p>
      <Button delete={'삭제'}/>
    </>
  )
}

export default DetailForm