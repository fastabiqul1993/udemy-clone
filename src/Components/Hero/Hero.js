import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteWishlist } from "../../Publics/Redux/Actions/wishlist";
import { Container, Row, Col, Badge, Card, Button } from "react-bootstrap";
import { postCart } from "../../Publics/Redux/Actions/cart";
import { postWishlist } from "../../Publics/Redux/Actions/wishlist";
import "./Hero.css";

class Hero extends Component {
  state = {
    cart: [],
    isAdded: false
  };

  handleCart = id_course => {
    this.props.dispatch(postCart(1, id_course)).then(suc => {
      alert("add success");
      window.location.reload();
    });
  };

  handleWish = (id_user, id_course) => {
    this.props.dispatch(postWishlist(id_user, id_course)).then(() => {
      alert("Add success");
      window.location.reload();
    });
  };

  handleRemove = (id_user, id_course) => {
    this.props.dispatch(deleteWishlist(id_user, id_course)).then(() => {
      alert("Remove success");
      window.location.reload();
    });
  };

  render() {
    let { course, stars, rating, cart, wishlist } = this.props;
    return (
      <div className="header">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col className="upper-header" md={{ span: 4, offset: 8 }}>
              <span>
                <i className="fa fa-gift" aria-hidden="true"></i> Gift this
                course
              </span>
              {/* id_course */}
              {wishlist.find(target => target.id_course === course.id) ? (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleRemove(1, course.id)}
                >
                  <i className="fa fa-heart"></i> Wishlist
                </span>
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleWish(1, course.id)}
                >
                  <i className="fa fa-heart-o"></i> Wishlist
                </span>
              )}
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
                <Card.Body key={cart.length} className="hero-body">
                  <Card.Title>
                    <h4>Rp.{course.price}</h4>
                  </Card.Title>
                  {cart.find(
                    target => Number(target.id_course) === course.id
                  ) ? (
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
    cart: state.cart.cart,
    wishlist: state.wishlist.wishlist
  };
};

export default connect(mapStateToProps)(Hero);
