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
      <h2>{postData.title}</h2>
      <h4>{postData.sub}</h4>
      <span><b>{postData.author}</b></span>
      <span>•</span>
      <span>{postData.date}</span>
    </Container>
  );
};

export default ContentHeader;
