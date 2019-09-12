import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Redux Actions
import { getWishlist } from "../Publics/Redux/Actions/wishlist";
import { getCart } from "../Publics/Redux/Actions/cart";
import { getCourses } from "../Publics/Redux/Actions/coureses";

//Main components
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/navbar2";
import Footer from "../Components/Footer/Footer";

//Home components
import Content from "../Components/Courses/Content";

//Detail components
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedBack/StudentFeedback";
import Comment from "../Components/Comment/Comment";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      totalWis: 0,
      totalCart: 0,
      course: {},
      stars: [],
      totalRating: 0
      // courseParam: this.props.match.params.id
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getWishlist(3));
    await this.props.dispatch(getCart(1));
    await this.props.dispatch(getCourses(1));

    this.setState({
      totalWis: this.props.totalWis,
      totalCart: this.props.totalCart,
      course: this.props.data.courseList.courseList
    });
  };

  render() {
    const { totalWis, totalCart, course } = this.state;
    // console.log(this.props.course);
    // console.log(course);
    // console.log(this.props.match.params.id);
    const getMatch = this.props.match.path;
    return (
      <Fragment>
        <Navbar totalWis={totalWis} totalCart={totalCart} />
        <Navbar2 />
        <Fragment>{getMatch === "/" ? <Content /> : null}</Fragment>
        <Fragment>
          {getMatch === "/detail/:id"} ?
          <Hero />
          <CourseContent />
          <StudentFeedback />
          <Comment />
        </Fragment>
        {/* <Hero />
        <CourseContent />
        <StudentFeedback />
        <Comment /> */}
        {/* <CartHeader />
        <CartBar /> */}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    //navbar
    totalWis: state.wishlist.range,
    totalCart: state.cart.range,
    data: state
  };
};

export default connect(mapStateToProps)(Wrapper);
