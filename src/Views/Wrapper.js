import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Components
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedBack/StudentFeedback";
import Comment from "../Components/Comment/Comment";

class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <CourseContent />
        <StudentFeedback />
        <Comment />
      </Fragment>
    );
  }
}

export default Wrapper;
