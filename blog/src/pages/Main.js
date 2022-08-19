import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const stateTitle = useSelector((state) => state.posting);
  console.log(stateTitle)
  return (
    <>
      <h1>🧁Blog🍹</h1>
      <h3>Main 페이지</h3>
      <Link to="/post"><button>글쓰기</button></Link>
      <br />
      <br />
      <ul>
        {stateTitle.map((item,index)=>{
          console.log(item)
          const {title, content} = item;
          console.log(title, content)
          return <Link to={`/${index}`} key={index}><h2>{title}</h2></Link>
          
          // <Link to={`/${stateTitle[index]}`} key={index}><span>{item}</span><br/></Link>
        })}
      </ul>
      <br />
    </>
  );
};

export default Main