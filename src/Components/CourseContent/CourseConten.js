import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  ListGroup
} from "react-bootstrap";
import "./CourseContent.css";

function CourseContent() {
  return (
    <Container style={{ position: "relative" }}>
      <Row className="course-content">
        <Col md={6} className="title">
          <h3>Course Content</h3>
        </Col>
        <Col md={6} className="description">
          <span className="item">78 Lectures</span>
          <span className="item">12:25:39</span>
        </Col>
        <Col md={12}>
          <Accordion className="accordion" defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Course Introduction
                <span>17:50</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Let's start the journey
                      <span>17:50</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      To the west
                      <span>17:50</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Finding Sun Go Kong
                      <span>17:50</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                <span>17:50</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Let's start the journey
                      <span>17:50</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      To the west
                      <span>17:50</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Finding Sun Go Kong
                      <span>17:50</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseContent;
