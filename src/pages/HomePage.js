// 페이지 내에 필수 요소 ( SideBar, NavBar )
import { Link, Outlet } from "react-router-dom";

import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Navbar, Row } from "react-bootstrap";

const HomePage = () => {
  const ClickEvent = (url) => {
    window.location.href = url
  }

  return (
    <>
      {/* NavBar */}
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/Blog">Blog</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <FontAwesomeIcon icon={faCircleUser} size="xl" />
            &emsp;
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <Container fluid className="mt-5">
        <Row >
          <Col xs="2" style={{border: "black 1px solid"}}>
            {/* SideBar */}
            <div>
              <div style={{ borderBottom: "1px solid", fontWeight: "bold" }}>
                작성목록
              </div>
              <ul>
                <li><Link to="/">Home</Link></li>
              </ul>
            </div>
          </Col>
          <Col style={{border: "black 1px solid"}}>
            {/* Outlet */}
            <Outlet />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <div className="d-flex justify-content-center border-top p-2">
        <a>Copyright ⓒ 2023 Seotjuu All rights reserved.</a>&emsp;
        <FontAwesomeIcon icon={faGithub} size="2x" style={{cursor: "pointer"}} onClick={()=>{ClickEvent("https://github.com/Seotjuu")}}/>
      </div>
    </>
  );
}

export default HomePage;