import {React, useState } from 'react'
import DetailForm from './DetailForm';
import EditForm from './EditForm';

const Detail = () => {
  const [allForm, setAllForm] = useState(true)
  const [modifyDisplay, setModifyDisplay] = useState('')

  const onClick =()=>{
    setAllForm(false)
    setModifyDisplay('none')
    return
  }

  return (
    <>
      {allForm ? <DetailForm/> : <EditForm/>}
      <br/>
      <button style={{display:modifyDisplay}} onClick={onClick}>수정!!!!</button>
      <br/><br/>
    </>
  )
}

export default Detail