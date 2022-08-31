import { Link } from 'react-router-dom';
import { useDispatch , useSelector  }from 'react-redux';
import { newsSlice } from "../store/store";
import Article from './Article';

const Clip = () => {
  const dispatch = useDispatch();
  const clips = useSelector(state=>state.news.clips)
  console.log('clipped List: ',clips)
  const clipBtn = ()=>{
    dispatch(newsSlice.actions.clip())
  }
  return (
  <>
    <h1>📌My Clips📌</h1>

    <Link to={'/'}><button>home</button></Link>
    <div>
      {clips.length === 0 ? <h4>There is no clipped article</h4> : clips.map((ele) => (
        <Article key={ele._id} ele={ele}/>
      ))}
    </div>
  </>
  )
}

export default Clip