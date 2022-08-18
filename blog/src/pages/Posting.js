import React from 'react'
import { useSelector } from 'react-redux'

function Posting() {
  const stateTitle = useSelector(state=>state.posting.title);
  const stateContent = useSelector(state=>state.posting.content);
  return (
  <>
    <h3>{stateTitle}</h3>
    <p>{stateContent}</p>
  </>
  )
}
export default Posting
