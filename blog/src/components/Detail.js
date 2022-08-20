import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state.posting);
  const params = useParams();

  return (
    <>
      <h3>{state[params.title].title}</h3>
      <p>{state[params.title].content}</p>
      <br/>
      <Link to={'/'}><button onClick={()=>dispatch({type:'DELETE_BTN', payload: state[params.title].title })}>삭제</button></Link>
      <button>수정</button>
    </>
  )
}

export default Detail