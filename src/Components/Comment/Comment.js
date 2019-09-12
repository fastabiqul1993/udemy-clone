import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import "./Comment.css";

function Comment(props) {
  // let comments = props.commentList ? props.commentList : 0;
  let commentList = props.commentList ? props.commentList : null;
  console.log(commentList);
  // let mapped = comments.map(comment => {
  //   console.log(comment);
  // });
  // console.log(comments.map => comments)

  return (
    <Container style={{ position: "relative" }}>
      <Row className="comment-display">
        <Col md={12}>
          <h3>Reviews</h3>
        </Col>
        <Col className="section border-top" md={12}>
          {/* {comments.map(comment => (
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
                  <span>{comment.name}</span>
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
                <p className="comment-text">{comment.comment}</p>
              </Col>
            </Row>
          ))} */}
        </Col>
      </Row>
    </Container>
  );
}

export default Comment;
