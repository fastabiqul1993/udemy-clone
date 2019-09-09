import React, { Component, Fragment } from "react";

import Navbar from "../Components/Navbar/Navbar";
import CartHeader from "../Components/CartHeader/CartHeader";
import CartBar from "../Components/CartBar/CartBar";
import Footer from "../Components/Footer/Footer";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <CartHeader />
        <CartBar />
        <Footer />
      </Fragment>
    );
  }
}

export default Cart;
