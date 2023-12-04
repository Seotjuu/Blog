import "./App.css";
import "./css/MidiaQuery.css";

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
  trash: boolean;
  check: boolean;
}

const App = () => {
  // 삭제 버튼 활성화 여부
  const [postDel, setPostDel] = useState(false);
  // 삭제 버튼 확인 여부
  const [delCheck, setDelCheck] = useState(false);

  // 삭제 버튼이 활성화되어있는지 사이드바에서 가져오는 함수
  const postHandler = (postCheck: IPostCheck) => {
    setPostDel(postCheck.trash);
  };

  const delItemHandelr = (check: boolean) => {
    setDelCheck(check);
  };

  return (
    <>
      <Routes>
        <Route element={<TopNavBar />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Siginup />}></Route>
          {/* sideBar 이중 라우터 */}
          <Route
            element={
              <SideNavBar
                postHandler={postHandler}
                delItemHandelr={delItemHandelr}
              />
            }
          >
            <Route
              path="/"
              element={<Main postDel={postDel} delCheck={delCheck} />}
            ></Route>
            <Route path="/PostRegister" element={<PostRegister />}></Route>
            <Route path="/PostView" element={<PostView />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
