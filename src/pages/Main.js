// Blog Main 화면

import { SideBar } from "./Bar";

export default function Main() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ margin: "1% 30%", border: "solid 1px" }}>
          <h2>Seotjuu's Blog</h2>

          <a>Seotjuu 님이 운영중인 블로그입니다!</a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod
            architecto, sed maiores temporibus vitae itaque fuga eum libero
            soluta recusandae eveniet similique. Temporibus laudantium omnis
            sint minus a quis?
          </p>
        </div>
      </div>
    </>
  );
}
