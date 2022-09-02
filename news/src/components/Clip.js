import { Link } from 'react-router-dom';
import { useSelector  }from 'react-redux';

import Article from './Article';

const Clip = () => {
  const clips = useSelector(state=>state.news.clips)
  console.log('clipped List: ',typeof(clips))

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