import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCourses } from "../Publics/Redux/Actions/coureses";
import { getRating } from "../Publics/Redux/Actions/rating";
import {
  getWishlist,
  postWishlist,
  deleteWishlist
} from "../Publics/Redux/Actions/wishlist";

import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedBack/StudentFeedback";
import Comment from "../Components/Comment/Comment";
import Footer from "../Components/Footer/Footer";

import Swal from "sweetalert2";

class Detail extends Component {
  state = {
    courses: [],
    stars: [],
    totalRating: 0,
    param: this.props.match.params.id,
    isWishlisted: false
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCourses(this.state.param));
    await this.setState({
      courses: this.props.data.coursesList.coursesList
    });

    await this.props.dispatch(getRating(this.state.param));
    await this.setState({
      rating: this.props.data.rating.rating
    });

    //setting wishlist status///////////////////////////////
    //check if the course is already in wishlist
    await this.props.dispatch(getWishlist(3));
    this.props.data.wishlist.wishlist.map(course => {
      if (this.state.param == course.id_course) {
        this.setState({ isWishlisted: true });
      }
    });
    //end//////////////////////////////////////////////

    let totRating = 0;

    let avgRating = 0;
    if (!(typeof this.state.rating == "undefined")) {
      avgRating = Math.floor(this.state.rating.averageRating);
      totRating = this.state.rating.totalRating;
      this.setState({ totalRating: totRating });
    }

    //rendering rating starts dynamically//////////////////////////////////////////////////
    const starsTmp = [];
    for (let i = 1; i <= avgRating; i++) {
      starsTmp.push(
        <i
          class="fa fa-star mr-1"
          style={{ color: "yellow" }}
          aria-hidden="true"
        ></i>
      );
    }
    for (let i = 1; i <= 5 - avgRating; i++) {
      starsTmp.push(<i class="fa fa-star-o mr-1" aria-hidden="true"></i>);
    }
    this.setState({ stars: starsTmp });

    //end of rendering stars////////////////////////////////////////////////////
  };

  addRemoveWishlist = async () => {
    if (!this.state.isWishlisted) {
      const course = {
        title: this.state.courses.title,
        image: this.state.courses.image,
        price: this.state.courses.price
      };
      await this.props.dispatch(postWishlist(3, this.state.param, course));
      this.setState({ isWishlisted: true });
      await this.props.dispatch(getWishlist(3));

      Swal.fire({
        position: "center",
        type: "success",
        title: "Added to wishlist.",
        showConfirmButton: false,
        timer: 1000
      });
    } else {
      await this.props.dispatch(deleteWishlist(3, this.state.param));
      this.setState({ isWishlisted: false });
      await this.props.dispatch(getWishlist(3));

      Swal.fire({
        position: "center",
        type: "success",
        title: "Removed to wishlist.",
        showConfirmButton: false,
        timer: 1000
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar />

        <Hero
          data={this.state.courses}
          rating={this.state.totalRating}
          stars={this.state.stars}
          addRemoveWishlist={this.addRemoveWishlist}
        />

        <CourseContent section={this.state.courses.section} />
        <div style={{ marginBottom: "70%" }}>
          <StudentFeedback />
          <Comment />
        </div>

        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Detail);
