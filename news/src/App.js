import React from "react";
import Main from "./components/Main";
import Clip from "./components/Clip";
import { Route, Routes, BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/clips" element={<Clip/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
