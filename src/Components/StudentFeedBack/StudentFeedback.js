import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./StudentFeedback.css";

function StudenFeedback() {
  return (
    <Container style={{ position: "relative" }}>
      <Row className="student-feedback">
        <Col md={12}>
          <h3>Student Feedback</h3>
        </Col>
        <Col md={4} className="rating">
          <h1>4.6</h1>
          <span className="star-badge">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </span>
          <p>Course Rating</p>
        </Col>
        <Col md={8}>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={60} />
            <span className="right-badge">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="percentage">60%</span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="percentage">60%</span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="percentage">60%</span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="percentage">60%</span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="percentage">60%</span>
            </span>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default StudenFeedback;
