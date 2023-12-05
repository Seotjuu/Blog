import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";

// icon
import { faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface IItemList {
  id: string;
  url: string;
  title: string;
  sub: string;
  author: string;
  date: string;
}

interface IProps {
  postDel: boolean;
  delCheck: boolean;
}

const Main = (props: IProps) => {
  // 버튼으로 페이지 url 이동
  const navigate = useNavigate();

  const [postData, setPostData] = useState<IItemList[]>([]);
  const [delItem, setDelItem] = useState<string[]>([]);
  // Firebase 게시물 데이터 가져오기
  const postEvent = async () => {
    // document에 대한 참조 생성
    const querySnapshot = await getDocs(
      collection(db!, process.env.REACT_APP_FIREBASE_COLLECTION!)
    );

    let itemList: IItemList[] = [];

    querySnapshot.forEach((doc) => {
      let docData: IItemList = doc.data() as IItemList;
      docData.id = doc.id;
      itemList.push(docData);
    });

    // 날짜 최신순으로 정렬
    itemList = itemList
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      .reverse();

    setPostData(() => itemList);
  };

  // delItem firebase 삭제
  const postDelHandler = () => {
    try {
      delItem.forEach(async (item) => {
        await deleteDoc(
          doc(db!, process.env.REACT_APP_FIREBASE_COLLECTION!, item)
        );
      });
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  };

  // select box 
  const changeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
        
  }
  useEffect(() => {
    postEvent();
    if (props.postDel) {
      setDelItem([]);
    }
    if (props.delCheck) {
      postDelHandler();
    }
  }, [props.postDel, props.delCheck]);

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-row-reverse">
            <Form.Select className="sort-btn mt-2" style={{width: "90px"}}
              // onChange={changeSelect}
            >
              <option value={"date"}>날짜</option>
              <option value={"name"}>이름</option>
              <option value={"title"}>제목</option>
            </Form.Select>
          </Col>
        </Row>

        <div className="post-list" >
          {postData &&
            postData.map((post, key) => {
              return (
                <Card className="main-card" key={key}>
                  <Card.Img
                    variant="top"
                    src={post.url || ""}
                    onClick={() => {
                      navigate(`/PostView?id=${post.id}`);
                    }}
                  />
                  {!props.postDel && (
                    <FontAwesomeIcon
                      icon={delItem.includes(post.id) ? faCircleCheck : faCircle}
                      size="xl"
                      onClick={() => {
                        if (delItem.includes(post.id)) {
                          setDelItem(delItem.filter((d) => d != post.id));
                        } else {
                          setDelItem([...delItem, post.id]);
                        }
                      }}
                      className="border rounded-circle"
                      style={{ position: "absolute", top: "5px", right: "5px", backgroundColor: "white", color: `${delItem.includes(post.id) ? "#0d6efd" : "white"}` }}
                    />
                  )}
                  <Card.Body
                    onClick={() => {
                      navigate(`/PostView?id=${post.id}`);
                    }}
                  >
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.sub}</Card.Text>
                  </Card.Body>
                  <Card.Footer
                    className="text-muted d-flex justify-content-between"
                    style={{ fontSize: "12px" }}
                  >
                    <span>{post.author}</span>
                    <span>{post.date.slice(0,10)}</span>
                  </Card.Footer>
                </Card>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Main;
