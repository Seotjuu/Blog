import React, { useEffect, useState } from "react";

import { db, storage } from "../firebase";
import { collection, addDoc, or } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import dayjs from "dayjs";
import Swal from "sweetalert2";

interface IInputData {
  title: string;
  sub: string;
  author: string;
  text: string;
}

const PostRegister = () => {
  const [inputData, setInputData] = useState<IInputData>();
  // Firebase 게시물 데이터 가져오기
  const postEvent = async () => {
    try {
      // 입력하지 않은 항목이 있으면 에러메세지 출력
      if(inputData?.title === undefined){
        throw new Error(`제목을 작성해주세요 🤔`);
      }
      if(inputData?.author === undefined){
        throw new Error(`작성자를 작성해주세요 😐`);
      }
      if(inputData?.text === undefined){
        throw new Error(`내용을 작성해주세요 😑`);
      }

      // 이미지 스토리지 사용해서 업로드 예정
      const fileInputelement = document.querySelector(
        "#image"
      ) as HTMLInputElement;
      let file;
      let uploaded_file;
      let file_url;

      if(fileInputelement.files![0]){
        file = fileInputelement.files![0];

        uploaded_file = await uploadBytes(
          ref(storage, `images/${file.name}`),
          file
        );
        file_url = await getDownloadURL(uploaded_file.ref);
      }

      //////////////////////////
      await addDoc(
        collection(db!, process.env.REACT_APP_FIREBASE_COLLECTION!),
        {
          ...inputData,
          date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          url: file_url || "",
        }
      )
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "완료",
            text: `게시물 등록이 완료되었습니다 !`,
            confirmButtonText: "완료",
            confirmButtonColor: '#3085d6',
          }).then((res) => {
            window.location.replace("/Blog");
          });
        })
        .catch((e) => {
          console.log("데이터 가져오기 실패 !!!!!!!" + e.message);
        });
    } catch (e) {
      let message = "";
      if (e instanceof Error) message = e.message;

      Swal.fire({
        icon: "warning",
        title: "경고",
        text: message,
        confirmButtonText: "확인",
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData!,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Label>제목</Form.Label>*
          <Form.Control name="title" type="text" onChange={onChangeInput} />

          <Form.Label>부제목</Form.Label>
          <Form.Control name="sub" type="text" onChange={onChangeInput} />

          <Form.Label>작성자</Form.Label>*
          <Form.Control name="author" type="text" onChange={onChangeInput} />

          <Form.Label>내용</Form.Label>*
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
