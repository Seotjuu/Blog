import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface IProps {
  postData: IHeaderData;
}

export interface IHeaderData {
  url: string,
  author: string,
  title: string,
  sub: string,
  date: string
  text?: string
}

const ContentHeader = ({ postData }: IProps) => {
  return (
    <Container className="border-bottom p-1">
      <Row>
        <Col xl="2" lg="2" md="2" sm="2" xs="2">
          <img style={{ width: "150px", height: "150px" }} src={postData.url} />
        </Col>
        <Col xl="8" lg="8" md="8" sm="8" xs="8">
          <span>{postData.author}</span>
          <h4>{postData.title}</h4>
          <span>{postData.sub}</span>
        </Col>
        <Col className="text-end">{postData.date}</Col>
      </Row>
    </Container>
  );
};

export default ContentHeader;
