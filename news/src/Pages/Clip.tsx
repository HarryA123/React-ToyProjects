import { useAppSelector } from "../app/hooks";
import React from "react";
import Article from "../components/Article";
import NavBar from "../components/NavBar";
import "../Styles/Clip.css";

const Clip = () => {
  const clips = useAppSelector(state => state.clips);

  return (
    <>
      <NavBar />
      <div className="PageTitle">My Clips</div>
      <div className="Article_Container">
        {clips.length === 0 ? (
          <h4>There is no clipped article</h4>
        ) :
        clips.map(ele => <Article key={ele._id} ele={ele} />)
        }
      </div>
    </>
  );
};

export default Clip;
