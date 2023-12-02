import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";

const Siginup = () => {
  const onSignUp = () => {
    console.log("회원가입 시도");
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="p-5">
              <Card.Body>
                <Card.Title>회원가입</Card.Title>
                <Form>
                  <Form.Label>이메일</Form.Label>
                  <Form.Control name="email" type="text" />
                  <Form.Label>이름</Form.Label>
                  <Form.Control name="name" type="text" />
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control name="pw" type="password" />
                  <Form.Label>비밀번호 확인</Form.Label>
                  <Form.Control name="pwcheck" type="password" />

                  <Button onClick={onSignUp}>회원가입</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Siginup;
