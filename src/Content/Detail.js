import React, { Component, Fragment } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedBack/StudentFeedback";
import Comment from "../Components/Comment/Comment";
import Footer from "../Components/Footer/Footer";

class Detail extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Hero />
        <CourseContent />
        <StudentFeedback />
        <Comment />
        <Footer />
      </Fragment>
    );
  }
}

export default Detail;
