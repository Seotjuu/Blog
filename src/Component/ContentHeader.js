import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContentHeader = (props) => {
  return (
    <Container className="border-bottom p-1">
      <Row>
        <Col
          xl="2"
          lg="2"
          md="2"
          sm="2"
          xs="2"
        >
          <img style={{ width: "150px", height: "150px"}} src={props.image} />
        </Col>
        <Col
          xl="8"
          lg="8"
          md="8"
          sm="8"
          xs="8"
        >
          <nav>{props.author}</nav>
          <h4>{props.title}</h4>
          <nav>{props.sub}</nav>
        </Col>
        <Col className="text-end">
          {props.date}
        </Col>
      </Row>
    </Container>
  );
}

export default ContentHeader;