import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Clip from "./pages/Clip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/:id" element={<Detail />} />
        <Route path="/Clip" element={<Clip />} />
      </Routes>
    </Router>
  );
};

export default App;
