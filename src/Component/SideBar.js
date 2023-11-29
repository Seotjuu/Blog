import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [list, setList] = useState("");

  return (
    <>
      <div className="SideBar">
        <div style={{ borderBottom: "1px solid", fontWeight: "bold" }}>
          작성목록
        </div>
        <ul>
          <li><Link to="/Main">Home</Link></li>
          <li><Link to="/list1">React</Link></li>
          <li><Link to="/list2">JavaScript</Link></li>
          <li><Link to="/list3">Html</Link></li>
          <li><Link to="/list4">Css</Link></li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
