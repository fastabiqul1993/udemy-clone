import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Container, Nav } from "react-bootstrap";
import "../CSS/whislist.css";
import Card from "../Components/Card/card";

class whislist extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="headerup">
          <Container className="pt-2 pb-2">
            <span className="course">My Course</span>
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
