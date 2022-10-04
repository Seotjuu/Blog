import "./App.css";
import "./css/Main.css";
import "./css/Sign.css";
import "./css/Bar.css";
import "./css/Cmm.css";
import { Bar, SideBar } from "./pages/Bar";
import Main from "./pages/Main";
import Login from "./pages/Sign/Login";
import Footer from "./pages/Footer";
import {List1, List2, List3, List4} from "./pages/List/List";

import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  // useLocation 정보
  const location = useLocation().pathname;

  return (
    <>
      {/* 지금 Url이 Login 페이지이면 Bar 안 나옴 */}
      {location !== "/" ? <Bar />  : null}
      {location !== "/" ? <SideBar />  : null}
      
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/list1" element={<List1 />}></Route>
          <Route path="/list2" element={<List2 />}></Route>
          <Route path="/list3" element={<List3 />}></Route>
          <Route path="/list4" element={<List4 />}></Route>
        </Routes>
      </div>
      {location !== "/" ? <Footer /> : null}
    </>
  );
}
