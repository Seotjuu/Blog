import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

// user 함수
import { CheckUser } from "../cmm/UserManagement";

const SideNavBar = () => {
  // 버튼으로 페이지 url 이동
  const navigate = useNavigate();
  const location = useLocation();
  console.log(CheckUser());

  console.log(location.pathname);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs="2" style={{ border: "black 1px solid" }}>
            <Button
              variant="success"
              onClick={() => {
                navigate("/PostRegister");
              }}
            >
              게시물 작성
            </Button>

            {/* SideBar */}
            <div>
              <div className="border-bottom">글 목록</div>
              <ul>
                <li>
                  <Link to="/">홈으로 가기</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col style={{ border: "black 1px solid" }}>
            {/* Outlet */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SideNavBar;
