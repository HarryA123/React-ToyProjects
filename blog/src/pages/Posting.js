import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

function Posting() {
  const state = useSelector(state=>state.posting);
  let params  = useParams();
  console.log(params.title)
  console.log(state)
  return (
  <>
    <h3>{state[params.title].title}</h3>
    <p>{state[params.title].content}</p>
    <br/>
  </>
  )
}
export default Posting
