import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CartHeader.css";

function CartHeader() {
  return (
    <div className="cart-header">
      <Container>
        <Row>
          <Col md={12} className="title">
            <span>
              <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            <span>/ Shopping Cart</span>
            <h1>Shopping Cart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartHeader;
