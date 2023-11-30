// 페이지 내에 필수 요소 ( SideBar, NavBar )
import { Link, Outlet, useNavigate } from "react-router-dom";

import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

const HomePage = () => {
  // 버튼으로 페이지 url 이동
  const navigate = useNavigate();

  return (
    <>
      {/* NavBar */}
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/Blog">Blog</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <a href="https://github.com/Seotjuu" style={{color: "black"}}>
              <FontAwesomeIcon icon={faGithub} size="xl"/>
            </a>
            &emsp;
            <FontAwesomeIcon icon={faCircleUser} size="xl" />
            &emsp;
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            &emsp;
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <Container className="mt-5">
        <Row >
          <Col xs="2" style={{border: "black 1px solid"}}>
          <Button variant="success"
            onClick={()=>{
              navigate('/PostRegister');
            }}
          >
            게시물 작성
          </Button>


            {/* SideBar */}
            <div>
              <div className="border-bottom">
                글 목록
              </div>
              <ul>
                <li><Link to="/">홈으로 가기</Link></li>
              </ul>
            </div>
          </Col>
          <Col style={{border: "black 1px solid"}}>
            {/* Outlet */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;