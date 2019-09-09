import React, { Component } from "react";
import Slider from "react-slick";
import {
  Card,
  OverlayTrigger,
  Button,
  Navbar,
  Container,
  Nav,
  Form,
  Badge,
  Image
} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blockStatement } from "@babel/types";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#05050594",
        borderRadius: "12px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#05050594",
        borderRadius: "12px"
      }}
      onClick={onClick}
    />
  );
}
const renderTooltip = props => (
  <div
    {...props}
    style={{
      backgroundColor: "#dfdfdf",
      padding: "2px 10px",
      color: "black",
      borderRadius: 5,
      padding: 10,
      marginTop: 10,

      ...props.style
    }}
  >
    <a href="#" style={{ textDecoration: "none", color: "black" }}>
      Est cupidatat excepteur offici
    </a>
    <br />
    <a href="#">Est cupidatat excepteur offici</a>
    <br />
    <a href="#">Est cupidatat excepteur offici</a>
    <br />
    <a href="#">Est cupidatat excepteur offici</a>
  </div>
);

const Example = () => (
  <OverlayTrigger
    placement="bottom"
    delay={{ show: 100, hide: 100 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);

export default class Tes extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className="justify-content-center d-flex ">
            <Navbar.Brand href="#home">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                width="100"
                height="30"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link className=" mr-3 left">
                <span className="icon">
                  <i class="fas fa-th fa-sm"></i>
                </span>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <span className="categories">Categories</span>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Item className="">
                <Form inline>
                  <div className="search-box1">
                    <Form.Control
                      className="search-txt "
                      type="text"
                      placeholder="Search"
                    />
                    <span className="search-btn">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </Form>
              </Nav.Item>
              <Nav.Link>
                <span className="categories">Tech on Udemy</span>
              </Nav.Link>
              <Nav.Link>
                <span className="categories">My Courses</span>
              </Nav.Link>
              <Nav.Link>
                <div>
                  <span className="categories" style={{ color: "red" }}>
                    <i class="fa fa-heart-o fa-lg"></i>
                    <Badge pill variant="danger">
                      9
                    </Badge>
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link>
                <span className="categories">
                  <i class="fa fa-shopping-cart fa-lg"></i>
                </span>
              </Nav.Link>
              <Nav.Link>
                <span className="categories">
                  <i class="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                </span>
              </Nav.Link>
              <Nav.Link>
                <Image
                  src="./img/user.png"
                  height="25px"
                  width="25px"
                  roundedCircle
                />
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="container">
          <h2> Multiple items </h2>
          <Slider {...settings}>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>

            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>

            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
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
            </div>
          </Slider>
          <Example />
        </div>
      </>
    );
  }
}
