import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <Link to={"/"}>
          <span>New World News</span>
        </Link>
        <Link to={"/clips"}>
          <button>My clips</button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
