import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar } from "react-bootstrap";

// user 함수
import { CheckUser } from "../cmm/UserManagement";

const TopNavBar = () => {
  // 버튼으로 페이지 url 이동
  const navigate = useNavigate();
  const location = useLocation();
  console.log(CheckUser());

  console.log(location.pathname);

  return (
    <>
      {/* NavBar */}
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/Blog">Blog</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <a href="https://github.com/Seotjuu" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            &emsp;
            <FontAwesomeIcon
              icon={faCircleUser}
              size="xl"
              onClick={() => {
                navigate("/Signup");
              }}
            />
            &emsp;
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            &emsp;
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default TopNavBar;
