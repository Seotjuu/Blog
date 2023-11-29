// Blog Main 화면
import Content from "../Component/Content";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="content">
        <Content/>
        <nav>전체 보기</nav>
        <ul>
          <li><Link to="/list1">React</Link></li>
          <li><Link to="/list2">JavaScript</Link></li>
          <li><Link to="/list3">Html</Link></li>
          <li><Link to="/list4">Css</Link></li>
        </ul>
      </div>
    </>
  );
}
