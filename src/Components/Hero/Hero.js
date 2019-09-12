import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Badge, Card, Button } from "react-bootstrap";
import { postCart } from "../../Publics/Redux/Actions/cart";
import { postWishlist } from "../../Publics/Redux/Actions/wishlist";
import "./Hero.css";
import cart from "../../Publics/Redux/Reducers/cart";

class Hero extends Component {
  state = {
    cart: []
  };

  handleCart = id_course => {
    this.props.dispatch(postCart(1, id_course)).then(suc => {
      alert("add success");
    });
  };

  handleWish = id_course => {
    this.props.dispatch(postWishlist(1, id_course)).then(() => {
      alert("Add success");
    });
  };

  render() {
    let { course, stars, rating, cart } = this.props;

    // let result = 0;
    // if (!(typeof this.props.avgRating == "undefined")) {
    //   result = Math.floor(this.props.avgRating);
    // }

    // //rendering rating starts dynamically//////////////////////////////////////////////////
    // const starsTmp = [];
    // for (let i = 1; i <= 5; i++) {
    //   if (result - i >= 0) {
    //     starsTmp.push(
    //       <i
    //         key={i}
    //         className="fa fa-star mr-1"
    //         style={{ color: "yellow" }}
    //         aria-hidden="true"
    //       ></i>
    //     );
    //   } else {
    //     starsTmp.push(
    //       <i key={i} className="fa fa-star-o mr-1" aria-hidden="true"></i>
    //     );
    //   }
    // }
    // this.setState({ stars: starsTmp });
    // //end of rendering stars////////////////////////////////////////////////////

    return (
      <div className="header">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col className="upper-header" md={{ span: 4, offset: 8 }}>
              <span>
                <i className="fa fa-gift" aria-hidden="true"></i> Gift this
                course
              </span>

              <span onClick={() => this.handleWish(course.id)}>
                <i className="fa fa-heart-o"></i> Wishlist
              </span>
            </Col>
            <Col className="left-header" md={8}>
              <div className="title">
                <h1>{course.title}</h1>
              </div>
              <div className="sub-title">
                <p>{course.description}</p>
              </div>
              <div className="rate">
                <Badge pill variant="warning" className="right-margin">
                  BESTSELLER
                </Badge>
                <span className="star-badge">{stars}</span>
                <span className="right-margin">{rating} Ratings</span>
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
                  src={course.image}
                />
                <Card.Body className="hero-body">
                  <Card.Title>
                    <h4>Rp.{course.price}</h4>
                  </Card.Title>
                  {cart.find(target => target.id_course === course.id) ? (
                    <Button
                      onClick={() => this.handleCart(course.id)}
                      variant="danger"
                      size="lg"
                      block
                      disabled
                    >
                      Add to cart
                    </Button>
                  ) : (
                    <Button
                      onClick={() => this.handleCart(course.id)}
                      variant="danger"
                      size="lg"
                      block
                    >
                      Add to cart
                    </Button>
                  )}
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
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

export default connect(mapStateToProps)(Hero);

// export default Hero;
