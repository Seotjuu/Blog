import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ContentHeader, { IHeaderData } from "../Component/ContentHeader";

import { db } from "../firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";

import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const PostView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get("id");

  // post 컬랙션에 해당 문서 데이터
  const [postData, setPostData] = useState<IHeaderData>({
    author: "",
    sub: "",
    date: "",
    title: "",
    url: "",
    text: ""
  });

  // Firebase 게시물 데이터 가져오기
  const postEvent = async () => {
    // 컬랙션 내에 문서의 ID에 맞는 데이터 저장
    const docRef = doc(db!, "post", postId!);
    const docSnap = await getDoc(docRef);
    
    setPostData(docSnap.data() as IHeaderData);
  };
  useEffect(() => {
    postEvent();
  }, []);

  return (
    <>
      <Container>
        <ContentHeader
          postData={postData}
        />

        {postData.url &&
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <img className="view-img" src={postData.url} />
          </Col>
        }
        {postData.text}
      </Container>
    </>
  );
};

export default PostView;
