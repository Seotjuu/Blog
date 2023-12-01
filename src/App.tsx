import "./App.css";
import "./css/Sign.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import PostRegister from "./pages/PostRegister";
import PostView from "./pages/PostView";

import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          
          {/* sideBar 이중 라우터 */}
          <Route element={<HomePage />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/PostRegister" element={<PostRegister />}></Route>
            <Route path="/PostView" element={<PostView />}></Route>
          </Route>
        </Routes>
    </>
  );
}

export default App;
