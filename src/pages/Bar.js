import React from "react";

import {
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Bar() {
  return (
    <>
      <div className="Bar">
        <nav>
          <span>Blog</span>
          <div>
            <a>
              <FontAwesomeIcon icon={faCircleUser} size="xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export function SideBar() {
  return (
    <>
      <div className="SideBar">
        <div style={{ borderBottom: "1px solid", fontWeight: "bold" }}>
          목록
        </div>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Html</li>
          <li>Css</li>
          <li>C</li>
        </ul>
      </div>
    </>
  );
}
