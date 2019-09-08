import React, { Component } from "react";
import {
  Navbar,
  Dropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import "../CSS/Navbar.css";
class asd extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Container className="justify-content-center d-flex">
            <Row>
              <Col md={2}>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                    width="100"
                    height="30"
                  />
                </Navbar.Brand>
              </Col>
              <Col md={2}>
                <Nav.Link className=" mr-3 left">
                  <span className="icon">
                    <i class="fas fa-th fa-sm"></i>
                  </span>
                  <span className="categories">Categories</span>
                </Nav.Link>
              </Col>
              <Col md={4}>
                <Nav.Item className="">
                  <Form inline>
                    <div className="search-box1 ">
                      <input
                        className="search-txt "
                        type="text"
                        onChange={this.searchInput}
                        onKeyPress={this.searchGo}
                        placeholder="Search"
                      />
                      <span className="search-btn">
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                  </Form>
                </Nav.Item>
              </Col>

              <Col md={2}>
                <Nav.Link>
                  <span className="categories">Helloos</span>
                </Nav.Link>
              </Col>
              <Col md={1}>
                <h3>Heyy</h3>
              </Col>
            </Row>
          </Container>
        </Navbar>
        ****************************************************************
        <Row>
          <Col md={2} className="mr-1">
            <Card>
              <Card.Img
                variant="top"
                src="https://i.udemycdn.com/course/240x135/874012_c7f2_3.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>
                  The Ultimate Drawing Course - Beginner to
                </Card.Title>
                <Card.Text>oo</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.udemycdn.com/course/240x135/1197206_7201_3.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.udemycdn.com/course/240x135/1046722_cbd7_2.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.udemycdn.com/course/240x135/412738_4543.jpg
                  "
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.udemycdn.com/course/240x135/627730_83d0_18.jpg

                  "
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/********************************* Home ******************/}
        <h3 className="my-3">What to learn next</h3>
        <h5>Top courses in Design</h5>
        <div className="d-flex">
          <Card style={{ maxWidth: "12rem" }} className="mr-2">
            <Card.Img
              variant="top"
              src="https://i.udemycdn.com/course/240x135/874012_c7f2_3.jpg"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "17px" }}>
                The Ultimate Drawing Course - Beginner to...
              </Card.Title>
              <Card.Text style={{ fontSize: "9px" }}>
                Jaysen Batchhelor, Quinton Batch...
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ maxWidth: "12rem" }} className="mr-2">
            <Card.Img
              variant="top"
              src="https://i.udemycdn.com/course/240x135/1197206_7201_3.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ maxWidth: "12rem" }} className="mr-2">
            <Card.Img
              variant="top"
              src="https://i.udemycdn.com/course/240x135/1046722_cbd7_2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ maxWidth: "12rem" }} className="mr-2">
            <Card.Img
              variant="top"
              src="https://i.udemycdn.com/course/240x135/412738_4543.jpg
        "
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ maxWidth: "12rem" }} className="mr-2">
            <Card.Img
              variant="top"
              src="https://i.udemycdn.com/course/240x135/627730_83d0_18.jpg

        "
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default asd;
