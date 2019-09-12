import React, { Component, Fragment } from "react";

//Detail components
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedback/StudentFeedback";
import Comment from "../Components/Comment/Comment";

class Detail extends Component {
  render() {
    const { course, rating, stars, plusTotalCart } = this.props;
    return (
      <Fragment>
        <Hero
          course={course}
          rating={rating.averageRating}
          plusTotalCart={plusTotalCart}
          stars={stars}
        />
        <CourseContent section={course.section} />
        <StudentFeedback
          avgRating={rating.averageRating}
          listRating={rating.listOfRating}
          totalRating={rating.totalRating}
        />
        {/* <Comment commentList={rating.commentList} /> */}
      </Fragment>
    );
  }
}

export default Detail;
