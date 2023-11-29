import React from "react";

const ContentHeader = (props) => {
  return (
    <div className="d-flex border-bottom p-1">
      <img style={{ width: "100px", height: "100px"}} src="./self_img1.jpg" />
      &emsp;
      <div>
          <h4>게시물 제목 {props.title}</h4>
          <br>
          </br>
          <nav>게시물 목적 {props.sub}</nav>
      </div>
    </div>
  );
}

export default ContentHeader;

// .main_sidetitle{
//   width: 100%;
// }