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
  const [postSort, setPostSort] = useState<string>("date");
  const [allDelete, setAllDelete] = useState(false);
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
    
    // 이름 오름차순
    if(postSort === "name"){
      itemList = itemList.sort((a, b) => {
        return a.author > b.author ? 1 : -1;
      })
    }
    // 제목 오름차순
    else if(postSort === "title"){
      itemList = itemList.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      })
    }
    else{ // 기본값 날짜 최신순으로
      itemList = itemList
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      .reverse();
    }

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
  const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPostSort(e.target.value)        
  }

  const changeChoice = (value: boolean) => {    
    // 전체 선택 버튼을 눌렀을 때
    if (value) {
      setDelItem(postData.map((post) => post.id));
    }
    // 전체 선택 해제 버튼 눌렀을 때
    else{
      setDelItem([]);
    }
  }
  
  useEffect(() => {
    // firebase 데이터 가져오기
    postEvent();

    // 삭제하기 선택 후 확인을 눌렀을 때
    if (props.delCheck && delItem.length) {
      postDelHandler();
    }    
  }, [props.delCheck, postSort, allDelete]);

  useEffect(() => {
    // 삭제하기 버튼을 눌렀을 때
    setAllDelete(false);

    if (props.postDel) {      
      setDelItem([]);
    }
  }, [props.postDel])

  useEffect(() => {
    // 개별로 전체 선택했을 때
    if(postData.length === delItem.length) {     
      setAllDelete(true);
    }
    // 전체 선택 후 개별로 취소했을 때
    else{
      setAllDelete(false);
    }    
  }, [delItem])

  return (
    <>
      <Container className="px-4">
        <Row className="mt-2">
          { postData.length && !props.postDel &&
            <Col>
              <Button variant="secondary" size="sm"
                onClick={(e)=>{
                  setAllDelete(!allDelete);
                  changeChoice(!allDelete)
                }}
              >
                {allDelete ? "전체 선택 해제" : "전체 선택"}
              </Button>
            </Col>
            || ""
          }

          <Col className="d-flex flex-row-reverse">
            <Form.Select size="sm" className="sort-btn" style={{width: "90px"}}
              onChange={changeSelect}
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
