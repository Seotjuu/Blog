import { Form, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

// icon
import {
  faTrash,
  faPenToSquare,
  faX,
  faCheck,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// user 함수
import { CheckUser } from "../cmm/UserManagement";
import { useEffect, useState } from "react";

interface IPostCheck {
  trash: boolean;
  check: boolean;
}

interface IProps {
  postHandler: (postCheck: IPostCheck) => void;
  delItemHandelr: (delCheck: boolean) => void;
}

const SideNavBar = (props: IProps) => {
  // 버튼으로 페이지 url 이동
  const navigate = useNavigate();
  const location = useLocation();

  const [postCheck, setPostCheck] = useState({
    trash: true,
    check: false,
  });

  useEffect(() => {
    props.postHandler(postCheck);
  }, [postCheck]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs="2" sm="2" md="2" className="nav-btn-group border">
              <Col className="text-center">
                <Button
                  className="nav-btn"
                  variant="primary"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                </Button>
              </Col>
              <Col className="text-center">
                <Button
                  className="nav-btn"
                  variant="success"
                  onClick={() => {
                    navigate("/PostRegister");
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
              </Col>
              {location.pathname == "/" && (
                <div className="text-center">
                  {postCheck.trash && (
                    <Button
                      className="nav-btn"
                      variant="secondary"
                      onClick={() => {
                        setPostCheck({
                          trash: false,
                          check: true,
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  )}
                  {postCheck.check && (
                    <>
                      <Button
                        className="nav-btn"
                        variant="primary"
                        onClick={() => {
                          setPostCheck({
                            trash: true,
                            check: false,
                          });
                          props.delItemHandelr(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </Button>
                      <Button
                        className="nav-btn"
                        variant="danger"
                        onClick={() => {
                          console.log("삭제 취소");
                          setPostCheck({
                            trash: true,
                            check: false,
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </Button>
                    </>
                  )}
                </div>
              )}
          </Col>

          <Col className="border">
            {/* Outlet */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SideNavBar;
