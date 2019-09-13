import React, { Component, Fragment } from "react";
import CartHeader from "../Components/CartHeader/CartHeader";
import CartBar from "../Components/CartBar/CartBar";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <CartHeader />
        <CartBar />
      </Fragment>
    );
  }
}

export default Cart;
