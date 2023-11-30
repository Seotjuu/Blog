import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Main = () => {
  // 버튼으로 페이지 url 이동
  const navigate = useNavigate();

  const [postData, setPostData] = useState([]);

  // Firebase 게시물 데이터 가져오기
  const postEvent = async () => {
    // document에 대한 참조 생성
    const querySnapshot = await getDocs(collection(db, process.env.REACT_APP_FIREBASE_COLLECTION));
    let itemList = []
    querySnapshot.forEach((doc)=>{
      let docData = doc.data()
      docData.id = doc.id
      itemList.push(docData)
    })
    
    // 날짜 최신순으로 정렬
    itemList = itemList.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }).reverse()

    setPostData(itemList)
  }

  useEffect(()=>{
    postEvent();
  }, [])

  return (
    <>
      <Container className='d-flex flex-wrap'>    
          {
            postData && postData.map((post, key)=>{
              return(
                  <Card style={{ width: '15rem', margin: '5px' }} key={key}
                    onClick={()=>{
                      navigate(`/PostView?id=${post.id}`);
                    }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>
                        {post.sub}
                      </Card.Text>    
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex justify-content-between" style={{ fontSize: "14px" }}>
                        <a>{post.author}</a>
                        <a>{post.date}</a>
                      </Card.Footer>
                  </Card>
              )
            })
          }
      </Container>
    </>
  );
}

export default Main;