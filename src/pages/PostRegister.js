import React, { useEffect, useState } from "react";

import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import dayjs from "dayjs";
import Swal from "sweetalert2";

const PostRegister = () => {
  const [inputData, setInputData] = useState({});
  // Firebase 게시물 데이터 가져오기
  const postEvent = async () => {
    try {
      if (Object.keys(inputData).length < 4) {
        throw new Error("작성 목록을 확인해주세요 !");
      }

      // 이미지 스토리지 사용해서 업로드 예정
      const file = document.querySelector("#image").files[0];
      const uploaded_file = await uploadBytes(
        ref(storage, `images/${file.name}`),
        file
      );
      const file_url = await getDownloadURL(uploaded_file.ref);

      //////////////////////////
      await addDoc(collection(db, process.env.REACT_APP_FIREBASE_COLLECTION), {
        ...inputData,
        date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        url: file_url,
      })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "완료",
            text: `게시물 등록이 완료되었습니다 !`,
            confirmButtonText: "완료",
          }).then((res) => {
            window.location.replace("/Blog");
          });
        })
        .catch((e) => {
          console.log("데이터 가져오기 실패 !!!!!!!" + e.message);
        });
    } catch (e) {
      Swal.fire({
        icon: "warning",
        title: "경고",
        text: `작성 목록을 확인해주세요 !`,
        confirmButtonText: "확인",
      });
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Label>제목</Form.Label>
          <Form.Control name="title" type="text" onChange={onChangeInput} />

          <Form.Label>부제목</Form.Label>
          <Form.Control name="sub" type="text" onChange={onChangeInput} />

          <Form.Label>작성자</Form.Label>
          <Form.Control name="author" type="text" onChange={onChangeInput} />

          <Form.Label>게시물 내용</Form.Label>
          <Form.Control
            name="text"
            as="textarea"
            rows={3}
            onChange={onChangeInput}
          />

          <Form.Label>이미지</Form.Label>
          <Form.Control id="image" type="file" />

          <Button
            variant="primary"
            onClick={() => {
              postEvent();
            }}
          >
            완료
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default PostRegister;
