import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const state = useSelector(state => state.posting);
  return (
    <>
      <h1>🧁Blog🍹</h1>
      <h3>Main 페이지</h3>
      <Link to="/post"><button>글쓰기</button></Link>
      <br />
      <br />
      <ul>
        {state.map((item,index)=>{
          const {title} = item;
          return <Link to={`/${index}`} key={index}><li>{title}
          </li></Link>
        })}
      </ul>
      <br />
    </>
  );
};

export default Main