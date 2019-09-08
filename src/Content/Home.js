import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import Content from "../Component/Home";
import Footer from "../Component/Footer";
class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default home;
