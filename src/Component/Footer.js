import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "../CSS/Footer.css";

const footer = () => {
  return (
    <>
      <div className="footer1">
        <Container className="justify-content-center">
          <Row>
            <Col md={2}>
              <img
                className="img-footer1"
                src="https://i.udemycdn.com/teaching/teach-footer.png"
                width="95rem"
                height="100rem"
              />
            </Col>
            <Col md={6} className="pt-4">
              <Row>
                <Col>
                  <h3>Teach the world online</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Create an online video course, reach students across the
                    globe, and earn money
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <button className="button-footer">Teach on Udemy</button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer2 ">
        <Container classNamw="justify-content-center">
          <Row className="ml-5">
            <Col lg={3}>
              <ul className="list">
                <li>
                  <a>Udemy for Business</a>
                </li>
                <li>
                  <a>Teach on Udemy</a>
                </li>
                <li>
                  <a>Udemy app</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul className="list">
                <li>
                  <a>Careers</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Help and Support</a>
                </li>
                <li>
                  <a>Affiliate</a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul className="list">
                <li>
                  <a>Sitemap</a>
                </li>
                <li>
                  <a>Popular courses</a>
                </li>
              </ul>
            </Col>
            <Col>
              <ButtonToolbar>
                <DropdownButton
                  drop="up"
                  variant="outline-secondary"
                  title="English"
                  id="dropdown-button-drop-up"
                  key="up"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer3 pt-3">
        <Container>
          <Row>
            <Col md={5}>
              <p style={{ fontSize: "13px" }}>
                Top companies choose Udemy for Business to build in-demand
                career skills.
              </p>
            </Col>
            <Col>
              <img
                className="mr-1"
                src="https://i.udemycdn.com/partner-logos/lyft-logo.svg"
                height="17"
                width="34"
              />
              <img
                className="mr-1"
                src="https://i.udemycdn.com/partner-logos/pinterest-logo.svg"
                height="17"
                width="99"
              />
              <img
                className="mr-1"
                src="https://i.udemycdn.com/partner-logos/adidas-logo.svg"
                height="17"
                width="34"
              />
              <img
                className="mr-1"
                src="https://i.udemycdn.com/partner-logos/eventbrite-logo.svg"
                height="17"
                width="99"
              />
              <img
                className="mr-1"
                src="https://i.udemycdn.com/partner-logos/surveymonkey-logo.svg"
                height="17"
                width="140"
              />
              <img
                className="mr-1"
                src="https://i.udemycdn.com/partner-logos/booking-logo.svg"
                height="17"
                width="140"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer4 p-4">
        <Container>
          <Row>
            <Col>
              <div className="d-flex">
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                  height="32"
                  width="110"
                  className="mr-3"
                />
                <p className="mt-2">Copyright © 2019 Udemy, Inc.</p>
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-end mt-2">
                <p>Terms</p>
                <p>Privacy Policy and Cookie Policy</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default footer;
