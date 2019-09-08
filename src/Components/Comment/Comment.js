import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import "./Comment.css";

function Comment() {
  return (
    <Container style={{ position: "relative" }}>
      <Row className="comment-display">
        <Col md={12}>
          <h3>Reviews</h3>
        </Col>
        <Col className="section border-top" md={12}>
          <Row>
            <Col sm={4} className="figure-img">
              <Figure>
                <Figure.Image
                  width={80}
                  height={80}
                  alt="171x180"
                  src="https://dummyimage.com/80x80/000/fff"
                  roundedCircle
                />
                <span>Stephen Chow</span>
              </Figure>
            </Col>
            <Col sm={8}>
              <div>
                <span className="comment-badge">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </span>
              </div>
              <p className="comment-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Comment;
