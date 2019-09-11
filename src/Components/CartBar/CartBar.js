import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CartBar.css";
import ReactToPrint from "react-to-print";
import ModalOut from "../Modal/Checkout";

class CartBar extends React.Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      // ref={ref => (this.printOut = ref)}
      <div>
        <Container>
          <Row className="cart-bar">
            <Col md={9} style={{ textAlign: "left" }}>
              <h5>1 Course in cart</h5>
              <Row>
                <Col sm={12}>
                  <Card>
                    <Card.Body className="cart-body">
                      <Row>
                        <Col xs={3}>
                          <Card.Img
                            className="body-image"
                            variant="top"
                            src="https://dummyimage.com/130x74/000/fff"
                          />
                        </Col>
                        <Col xs={4} className="body-text">
                          <h6>This course is awesome!</h6>
                        </Col>
                        <Col xs={3} className="body-cmd">
                          <span>
                            <a href="#">Remove</a>
                          </span>

                          <div>
                            <a href="#">Move to whislist</a>
                          </div>
                        </Col>
                        <Col xs={2} className="price">
                          <b>Rp 57.500</b>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="cart-checkout">
              <h5>Total</h5>
              <h3>Rp. 57.500</h3>
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
        />
      </div>
    );
  }
}

export default CartBar;
