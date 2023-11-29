import "./App.css";
import "./css/Sign.css";
import "./css/Bar.css";
import "./css/Cmm.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
        <Routes>
        <Route path="/login" element={<Login />}></Route>
          {/* sideBar 이중 라우터 */}
          <Route exact element={<HomePage />}>
            <Route path="/" element={<Main />}></Route>
          </Route>
        </Routes>
    </>
  );
}

export default App;
