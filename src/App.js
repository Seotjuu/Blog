import "./App.css";
import "./css/Main.css";
import "./css/Sign.css";
import "./css/Bar.css";
import Bar from "./pages/Bar";
import Main from "./pages/Main";
import Login from "./pages/Sign/Login";

import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  // useLocation 정보
  const location = useLocation().pathname;

  return (
    <>
      {/* 지금 Url이 Login 페이지이면 Bar 안 나옴 */}
      {location !== "/" ? <Bar /> : null}

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </>
  );
}
