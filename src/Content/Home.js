import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCourses } from "../Publics/Redux/Actions/coureses";
import Navbar from "../Components/Navbar/Navbar";
import Content from "../Components/Courses/Home";
import Footer from "../Components/Footer/Footer";
import Navbar2 from "../Components/Navbar/navbar2";

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
