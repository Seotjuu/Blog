import "./App.css";
import "./css/Sign.css";

import TopNavBar from "pages/TopNavBar";
import SideNavBar from "pages/SideNavBar";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Siginup from "pages/Signup";
import PostRegister from "./pages/PostRegister";
import PostView from "./pages/PostView";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<TopNavBar />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Siginup />}></Route>
          {/* sideBar 이중 라우터 */}
          <Route element={<SideNavBar />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/PostRegister" element={<PostRegister />}></Route>
            <Route path="/PostView" element={<PostView />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
