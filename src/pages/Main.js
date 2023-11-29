// Blog Main 화면
import React, { useEffect, useState } from 'react'

import { Col, Container, Row } from "react-bootstrap";
import ContentHeader from "../Component/ContentHeader";

import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';


const Main = () => {

  // Firebase 게시물 데이터 가져오기
  const postEvent = () => {
    // document에 대한 참조 생성
    const docRef = doc(db, "react-blog", "post");
    // 참조에 대한 Snapshot 쿼리
    const docSnap = getDoc(docRef);
    console.log(docSnap.data());
  }

  useEffect(()=>{
    postEvent();
  }, [])

  return (
    <>
      <Container>
        <ContentHeader/>

        <Row>
          <Col>
            asdsadsda
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;