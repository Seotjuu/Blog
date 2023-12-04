import { Form, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

// icon
import {
  faTrash, faPenToSquare, faX, faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// user 함수
import { CheckUser } from "../cmm/UserManagement";
import { useEffect, useState } from "react";

interface IPostCheck {
  trash: boolean,
  check: boolean,
}


interface IProps {
  postHandler: (postCheck: IPostCheck) => void;
}

const SideNavBar = (props: IProps) => {
  // 버튼으로 페이지 url 이동
  const navigate = useNavigate();
  const location = useLocation();

  const [postCheck, setPostCheck] = useState({
    trash: true,
    check: false,
  });

  useEffect(()=>{
    props.postHandler(postCheck)    
  }, [postCheck])

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs="2" style={{ border: "black 1px solid" }}>
            <Row className="justify-center">
              <Col
                xl="5"
                lg="5"
                md="5"
                sm="5"
                xs="5"
                className="text-center"
               >
                <Button
                  variant="success"
                  onClick={() => {
                    navigate("/PostRegister");
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="xl" />
                </Button>
              </Col>
              {location.pathname == "/" &&
                <Col
                xl="7"
                lg="7"
                md="7"
                sm="7"
                xs="7"
                className="text-center"
               >
                {postCheck.trash && 
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setPostCheck({
                        trash: false,
                        check: true
                      })
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} size="xl" />
                  </Button>
                }
                {postCheck.check &&
                  <>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setPostCheck({
                          trash: true,
                          check: false
                        })
                      }}
                    >
                      <FontAwesomeIcon icon={faCheck} size="lg" />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        console.log("삭제 취소");
                        setPostCheck({
                          trash: true,
                          check: false
                        })
                      }}
                    >
                      <FontAwesomeIcon icon={faX} size="xl" />
                    </Button>
                  </>
                }
              </Col>
              }
            </Row>
            

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
