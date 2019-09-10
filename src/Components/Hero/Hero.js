import React from "react";
import { Container, Row, Col, Badge, Card, Button } from "react-bootstrap";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="header">
      <Container style={{ position: "relative" }}>
        <Row>
          <Col className="upper-header" md={{ span: 4, offset: 8 }}>
            <span>
              <i className="fa fa-gift" aria-hidden="true"></i> Gift this course
            </span>
            <span>
              <i className="fa fa-heart-o"></i> Whislist
            </span>
          </Col>
          <Col className="left-header" md={8}>
            <div className="title">
              <h1>{props.data.title}</h1>
            </div>
            <div className="sub-title">
              <p>{props.data.description}</p>
            </div>
            <div className="rate">
              <Badge pill variant="warning" className="right-margin">
                BESTSELLER
              </Badge>
              <span className="star-badge">{props.stars}</span>
              <span className="right-margin">{props.rating} Ratings</span>
              <span className="right-margin">137,206 students enrolled</span>
            </div>
            <div className="author">
              <span>Created by Jonas Schmedtmann</span>
              <span>Last updated 11/2018</span>
            </div>
          </Col>
          <Col className="right-header" md={4}>
            <Card className="hero-card">
              <Card.Img
                className="hero-card-img"
                variant="top"
                src={props.data.image}
              />
              <Card.Body className="hero-body">
                <Card.Title>
                  <h4>Rp.{props.data.price}</h4>
                </Card.Title>
                <Button href="/cart" variant="danger" size="lg" block>
                  Add to cart
                </Button>
                <Button variant="outline-secondary" size="lg" block>
                  Buy now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
