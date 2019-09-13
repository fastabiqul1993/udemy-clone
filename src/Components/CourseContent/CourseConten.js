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

function CourseContent(props) {
  const sections = props.section;

  return sections ? (
    <Container style={{ position: "relative" }}>
      <Row className="course-content">
        <Col md={6} className="title">
          <h3>Course Content</h3>
        </Col>
        <Col md={12}>
          {/* {console.log(sections)} */}
          {sections.map((section, index) => (
            <Accordion key={index} className="accordion" defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                  {section.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${index}`}>
                  <Card.Body>
                    {sections[index].lecture.map((lec, i) => (
                      <ListGroup key={i} variant="flush">
                        <ListGroup.Item>
                          {lec.title}
                          <span>{lec.duration} minute</span>
                        </ListGroup.Item>
                      </ListGroup>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </Col>
      </Row>
    </Container>
  ) : null;
}

export default CourseContent;
