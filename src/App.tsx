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
import { useEffect, useState } from "react";

interface IPostCheck {
  trash: boolean,
  check: boolean,
}

const App = () => {
  const [postDel, setPostDel] = useState(false)

  const postHandler = (postCheck: IPostCheck) => {
    setPostDel(postCheck.trash);
  }

  return (
    <>
      <Routes>
        <Route element={<TopNavBar />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Siginup />}></Route>
          {/* sideBar 이중 라우터 */}
          <Route element={<SideNavBar postHandler={postHandler}/>}>
            <Route path="/" element={<Main postDel={postDel}/>}></Route>
            <Route path="/PostRegister" element={<PostRegister />}></Route>
            <Route path="/PostView" element={<PostView />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
