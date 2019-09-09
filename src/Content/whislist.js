import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Container, Nav } from "react-bootstrap";
import "../CSS/whislist.css";
import Card from "../Component/card";

class whislist extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="header">
          <Container className="pt-5 pb-2">
            <span className="course">My Course</span>
            <div style={{ maxWidth: "502px", color: "white" }}></div>
          </Container>
        </div>
        <Container className="mt-4">
          <Card />
        </Container>
        <Footer />
      </>
    );
  }
}
export default whislist;
