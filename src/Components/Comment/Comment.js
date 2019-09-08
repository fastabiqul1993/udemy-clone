import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Comment.css";

function Comment() {
  return (
    <div>
      <Container style={{ position: "relative" }}>
        <Row style={{ width: "100%" }}>
          <Col md={12} style={{ background: "blue" }}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Comment;
