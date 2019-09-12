//React components
import React, { Component } from "react";
import { connect } from "react-redux";

//Redux Actions
import { getCoursesPage } from "../../Publics/Redux/Actions/coureses";
import { getWishlist } from "../../Publics/Redux/Actions/wishlist";

//Components style
import { Container } from "react-bootstrap";
import CardCol from "../Card/card";
import Slider from "react-slick";
import "../../CSS/Home.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#05050594",
        borderRadius: "12px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#05050594",
        borderRadius: "12px"
      }}
      onClick={onClick}
    />
  );
}

class content extends Component {
  state = {
    courses: [],
    limit: 8,
    page: 1
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCoursesPage(0, this.state.limit));
    this.setState({
      courses: this.props.courseList
    });
  };

  // ====================================PAGE
  handlePage = async () => {
    let page = this.state.page + 1;

    let offset = (page - 1) * this.state.limit;
    await this.props.dispatch(getCoursesPage(offset, this.state.limit));

    let courses = [...this.state.courses, ...this.props.courseList];
    await this.setState({ page, courses });
  };

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      afterChange: (slide, index) => {
        this.handlePage();
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <Container className="justify-content-center mb-5 ">
          <h3 className="my-3">What to learn next</h3>
          <h5>Top courses in Design</h5>
          <Slider {...settings}>
            {this.state.courses.map((course, index) => {
              return (
                <div key={index} style={{ display: "inline-block" }}>
                  <CardCol
                    id={course.id}
                    title={course.title}
                    image={course.image}
                    price={course.price}
                  />
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseList: state.coursesList.coursesList
  };
};

export default connect(mapStateToProps)(content);
