import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post from "./pages/Post";
import Main from "./pages/Main";
import Posting from "./pages/Posting";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Main />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/:index" element={<Posting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
