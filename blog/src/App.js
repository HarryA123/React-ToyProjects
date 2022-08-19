import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "./pages/Post";
import Main from "./pages/Main";
import Posting from "./pages/Posting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/:title" element={<Posting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
