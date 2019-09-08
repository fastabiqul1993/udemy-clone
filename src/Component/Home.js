import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class content extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Container className="justify-content-center ">
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
        </Container>
      </div>
    );
  }
}
export default content;
