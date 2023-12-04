import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";

// icon
import {
  faCircleCheck, faCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface IItemList {
  id: string
  url: string
  title: string
  sub: string
  author: string
  date: string
}

interface IProps {
  postDel: boolean,
}

const Main = (props: IProps ) => {
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
    delItem.forEach(async (item)=>{
      await deleteDoc(doc(db!, process.env.REACT_APP_FIREBASE_COLLECTION!, item));
    })
  }


  useEffect(() => {
    postEvent();
    if(props.postDel){
      setDelItem([]);
    }    
  }, [props.postDel]);

  return (
    <>
      <Container className="d-flex flex-wrap">
        {postData &&
          postData.map((post, key) => {
            return (
              <Col key={key}>                
                <Card
                  style={{ width: "15rem", margin: "5px" }}
                >
                  <Card.Img variant="top" src={post.url}
                    onClick={() => {
                      navigate(`/PostView?id=${post.id}`);
                    }}
                  />
                  {!props.postDel &&
                    <Button
                    variant={delItem.includes(post.id) ? "danger" : "dark"}
                    onClick={() => {
                      if(delItem.includes(post.id)){
                        setDelItem(delItem.filter((d)=> d!=post.id));
                      }
                      else{
                        setDelItem([
                          ...delItem,
                          post.id
                        ])
                      }
                    }}
                    style={{ position: "absolute", top: "5px", right: "5px" }}
                    >
                      <FontAwesomeIcon icon={delItem.includes(post.id) ? faCircleCheck : faCircle} size="xl" />
                    </Button>
                  }
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
                    <span>{post.date}</span>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
      </Container>
    </>
  );
};

export default Main;
