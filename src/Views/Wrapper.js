import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

//Components
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedBack/StudentFeedback";

class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <CourseContent />
        <StudentFeedback />
      </Fragment>
    );
  }
}

export default Wrapper;
