import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Components
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedBack/StudentFeedback";
import Comment from "../Components/Comment/Comment";
import CartHeader from "../Components/CartHeader/CartHeader";
import CartBar from "../Components/CartBar/CartBar";

class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        {/* <Hero />
        <CourseContent />
        <StudentFeedback />
        <Comment /> */}
        <CartHeader />
        <CartBar />
      </Fragment>
    );
  }
}

export default Wrapper;
