// 페이지 내에 필수 요소 ( SideBar, NavBar )
import { Outlet } from "react-router-dom";
import SideBar from "../Component/SideBar";
import NavBar from "../Component/NavBar";

import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  const ClickEvent = (url) => {
    window.location.href = url
  }

  return (
    <>
      <SideBar/>
      <NavBar/>
      <Outlet />

      <div className="d-flex justify-content-center fixed-bottom border-top p-2">
        <a>Copyright ⓒ 2022 Seotjuu All rights reserved.</a>&emsp;
        <FontAwesomeIcon icon={faGithub} size="2x" onClick={()=>{ClickEvent("https://github.com/Seotjuu")}}/>
      </div>
    </>
  );
}

export default HomePage;