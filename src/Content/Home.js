import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import Content from "../Component/Home";
import Footer from "../Component/Footer";
import Navbar2 from "../Component/navbar2";
class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Navbar2 />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default home;
