import React from "react";
import Main from "./Pages/Main";
import Clip from "./Pages/Clip";
import NotFound from "./components/NotFound"
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/clips" element={<Clip />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
