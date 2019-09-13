import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./StudentFeedback.css";
function StudenFeedback(props) {
  // Percentage Calculation
  const calcPercentage = (value, total) => {
    if (value == 0) {
      return 0;
    } else {
      return (value / total) * 100;
    }
  };

  let listRating = props.listRating ? props.listRating : 0;
  return (
    <Container style={{ position: "relative" }}>
      <Row className="student-feedback">
        <Col md={12}>
          <h3>Student Feedback</h3>
        </Col>
        <Col md={4} className="rating">
          <h1>{props.avgRating}</h1>
          <p>Course Rating</p>
        </Col>
        <Col md={8}>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={60} />
            <span className="right-badge">
              <span className="percentage">
                {calcPercentage(listRating.fiveStar, props.totalRating)}%
              </span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="percentage">
                {calcPercentage(listRating.fourStar, props.totalRating)}%
              </span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="percentage">
                {calcPercentage(listRating.threeStar, props.totalRating)}%
              </span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="percentage">
                {calcPercentage(listRating.twoStar, props.totalRating)}%
              </span>
            </span>
          </div>
          <div className="rate-bar">
            <ProgressBar className="bar" variant="secondary" now={40} />
            <span className="right-badge">
              <span className="percentage">
                {calcPercentage(listRating.oneStar, props.totalRating)}%
              </span>
            </span>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default StudenFeedback;
