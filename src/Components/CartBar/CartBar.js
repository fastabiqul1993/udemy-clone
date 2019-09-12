import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, deleteCart } from "../../Publics/Redux/Actions/cart";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CartBar.css";

import ModalOut from "../Modal/Checkout";

class CartBar extends React.Component {
  state = {
    show: false,
    cart: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCart(1));
    this.setState({ cart: this.props.cart });
  };

  handleRemove = async (id_user, id_course) => {
    await this.props.dispatch(deleteCart(id_user, id_course)).then(() => {
      const cart = this.state.cart.filter(
        cart => (cart.id_user && cart.id_course) !== (id_user && id_course)
      );
      this.setState({ cart });
    });
  };

  handleMoveWishlist = async (id_user, id_course) => {
    //  POST KE WISHLIST
    // await this.props.dispatch(postWishlist(id_user, id_course)).then(() => {
    //   SETELAH BERHASIL DI POST LALU DELETE DATA YG ADA DI CART
    //   this.props.dispatch(deleteCart(id_user, id_course)).then(() => {
    //     const cart = this.state.cart.filter(cart => (cart.id_user && cart.id_course) !== (id_user && id_course))
    //     this.setState({cart})
    //   })
    // })
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    // console.log("props", this.props);
    let total = 0;
    this.state.cart.map(course => {
      total += course.price;
    });
    return (
      // ref={ref => (this.printOut = ref)}
      <div>
        <Container>
          <Row className="cart-bar">
            <Col md={9} style={{ textAlign: "left" }}>
              <h5>{this.state.cart.length} Course in cart</h5>
              {this.state.cart.map(course => (
                <Row>
                  <Col sm={12}>
                    <Card>
                      <Card.Body className="cart-body">
                        <Row>
                          <Col xs={3}>
                            <Card.Img
                              className="body-image"
                              variant="top"
                              src={course.image}
                            />
                          </Col>
                          <Col xs={4} className="body-text">
                            <h6>{course.title}</h6>
                          </Col>
                          <Col xs={3} className="body-cmd">
                            <span>
                              <a
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() =>
                                  this.handleRemove(
                                    course.id_user,
                                    course.id_course
                                  )
                                }
                              >
                                Remove
                              </a>
                            </span>

                            <div>
                              <a
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() =>
                                  this.handleMoveWishlist(
                                    course.id_user,
                                    course.id_course
                                  )
                                }
                              >
                                Move to Wishlist
                              </a>
                            </div>
                          </Col>
                          <Col xs={2} className="price">
                            {console.log(total)}
                            <b>
                              Rp{" "}
                              {course.price.toLocaleString(navigator.language, {
                                minimumFractionDigits: 0
                              })}
                            </b>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              ))}
            </Col>
            <Col md={3} className="cart-checkout">
              <h5>Total</h5>
              <h3>
                {total.toLocaleString(navigator.language, {
                  minimumFractionDigits: 0
                })}
              </h3>
              {/* <ReactToPrint
                trigger={() => (
                  <Button variant="danger" size="lg" block>
                    Checkout
                  </Button>
                )}
                content={() => this.print}
              /> */}
              <Button variant="danger" onClick={this.handleShow}>
                Checkout
              </Button>
              {/* <ReactToPrint
                trigger={() => <a href="#">Print this out!</a>}
                content={() => this.printOut}
              /> */}
            </Col>
          </Row>
        </Container>
        <ModalOut
          keyClose={this.handleClose}
          keyOpen={this.handleShow}
          keys={this.state.show}
          datas={this.state.cart}
          total={total}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

export default connect(mapStateToProps)(CartBar);
