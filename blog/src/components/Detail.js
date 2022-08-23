import {React, useState } from 'react'
import DetailForm from './DetailForm';
import EditForm from './EditForm';

const Detail = () => {
  const [allForm, setAllForm] = useState(true);

  return (
    <>
      {allForm ? <DetailForm setAllForm={setAllForm}/> : <EditForm/>}
    </>
  )
}

export default Detail