// TopBar

import React, { useState } from "react";

export default function TopBar() {
  const sideBar = () => {
    alert("SideBar");
  };

  const [show, setShow] = useState(false)

  return (
    <>
      <div className="TopBar">
        <button onClick={sideBar}>SideBar</button>

        <h1>Seotjuu's Blog</h1>
      </div>
    </>
  );
}
