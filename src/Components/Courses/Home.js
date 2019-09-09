import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../CSS/Home.css";

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

class content extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1174,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Container className="justify-content-center ">
          <h3 className="my-3">What to learn next</h3>
          <h5>Top courses in Design</h5>
          <Slider {...settings}>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
                <a
                  href="/detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
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
                    <Card.Text>
                      <div style={{ fontSize: "9px" }}>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <span>4,5</span>
                        <span> (60,600)</span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <h5>Rp168,000</h5>
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
                <a
                  href="/detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://i.udemycdn.com/course/240x135/1197206_7201_3.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      The Ultimate Drawing Course - Beginner to...
                    </Card.Title>
                    <Card.Text style={{ fontSize: "9px" }}>
                      Jaysen Batchhelor, Quinton Batch...
                    </Card.Text>
                    <Card.Text>
                      <div style={{ fontSize: "9px" }}>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <span>4,5</span>
                        <span> (60,600)</span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <h5>Rp168,000</h5>
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
                <a
                  href="/detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://i.udemycdn.com/course/240x135/1046722_cbd7_2.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      The Ultimate Drawing Course - Beginner to...
                    </Card.Title>
                    <Card.Text style={{ fontSize: "9px" }}>
                      Jaysen Batchhelor, Quinton Batch...
                    </Card.Text>
                    <Card.Text>
                      <div style={{ fontSize: "9px" }}>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <span>4,5</span>
                        <span> (60,600)</span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <h5>Rp168,000</h5>
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
                <a
                  href="detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://i.udemycdn.com/course/240x135/412738_4543.jpg
        "
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      The Ultimate Drawing Course - Beginner to...
                    </Card.Title>
                    <Card.Text style={{ fontSize: "9px" }}>
                      Jaysen Batchhelor, Quinton Batch...
                    </Card.Text>
                    <Card.Text>
                      <div style={{ fontSize: "9px" }}>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <span>4,5</span>
                        <span> (60,600)</span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <h5>Rp168,000</h5>
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
                <a
                  href="/detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://i.udemycdn.com/course/240x135/627730_83d0_18.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      The Ultimate Drawing Course - Beginner to...
                    </Card.Title>
                    <Card.Text style={{ fontSize: "9px" }}>
                      Jaysen Batchhelor, Quinton Batch...
                    </Card.Text>
                    <Card.Text>
                      <div style={{ fontSize: "9px" }}>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <span>4,5</span>
                        <span> (60,600)</span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <h5>Rp168,000</h5>
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
                <a
                  href="/detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://i.udemycdn.com/course/240x135/627730_83d0_18.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      The Ultimate Drawing Course - Beginner to...
                    </Card.Title>
                    <Card.Text style={{ fontSize: "9px" }}>
                      Jaysen Batchhelor, Quinton Batch...
                    </Card.Text>
                    <Card.Text>
                      <div style={{ fontSize: "9px" }}>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <span>4,5</span>
                        <span> (60,600)</span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <h5>Rp168,000</h5>
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
            <div>
              <Card style={{ maxWidth: "12rem" }}>
                <a
                  href="/detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://i.udemycdn.com/course/480x270/914296_3670_8.jpg "
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "17px" }}>
                      The Ultimate Drawing Course - Beginner to...
                    </Card.Title>
                    <Card.Text style={{ fontSize: "9px" }}>
                      Jaysen Batchhelor, Quinton Batch...
                    </Card.Text>
                    <Card.Text>
                      <div style={{ fontSize: "9px" }}>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i
                          class="fa fa-star mr-1"
                          style={{ color: "yellow" }}
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                        <span>4,5</span>
                        <span> (60,600)</span>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <h5>Rp168,000</h5>
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}
export default content;
