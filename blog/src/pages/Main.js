import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const writeBtn = () => {};
  // const [postList, setPostList] = useState([]);
  const stateTitle = useSelector(state=>state.posting.title)
  return (
    <>
      <h1>🧁Blog🍹</h1>
      <h3>Main 페이지</h3>
      <Link to="/post">
        <button onClick={writeBtn}>글쓰기</button>
      </Link>
      <Link to={`/${stateTitle}`}>
        <h3>{stateTitle}</h3>
      </Link>
    </>
  );
};

export default Main