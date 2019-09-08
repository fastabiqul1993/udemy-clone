import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

//Components
import Hero from "../Components/Hero/Hero";

class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
      </Fragment>
    );
  }
}

export default Wrapper;
