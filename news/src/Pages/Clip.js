import { useSelector } from "react-redux";
import Article from "../components/Article";
import NavBar from "../components/NavBar";
import "../Styles/Clip.css";

const Clip = () => {
  const clips = useSelector(state => state.clips);
  console.log("clipped List: ", typeof clips);

  return (
    <>
      <NavBar />
      <div className="PageTitle">My Clips</div>
      <div className="Article_Container">
        {clips.length === 0 ? (
          <h4>There is no clipped article</h4>
        ) : (
          clips.map(ele => <Article key={ele._id} ele={ele} />)
        )}
      </div>
    </>
  );
};

export default Clip;
