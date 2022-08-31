import { Link } from 'react-router-dom';
import { useDispatch , useSelector  }from 'react-redux';
import { newsSlice } from "../store/store";

const Clip = () => {
  const dispatch = useDispatch();
  const clips = useSelector(state=>state.news)
  console.log(clips)
  const clipBtn = ()=>{
    dispatch(newsSlice.actions.clip())
  }
  return (
  <>
    <h1>🌏New World News🌍</h1>

    <Link to={'/'}><button>home</button></Link>
    <div>
      {clips ? clips.map((ele) => (
        <div key={ele.url}>
          <span onClick={clipBtn}> 📌</span><strong>{ele.title}</strong>
          <p>{ele.description}</p>
          <p>{ele.publishedAt.slice(0,10).replaceAll('-','.')}</p>
          <br/><br/>
        </div>
      )) : <h2>아직 클립된 것이 없습니다</h2>}
    </div>
  </>
  )
}

export default Clip