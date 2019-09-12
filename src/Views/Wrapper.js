import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Redux Actions
import { getWishlist } from "../Publics/Redux/Actions/wishlist";
import { getCart } from "../Publics/Redux/Actions/cart";
import { getCourses } from "../Publics/Redux/Actions/coureses";
import { getRating } from "../Publics/Redux/Actions/rating";

//Main components
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/navbar2";
import Footer from "../Components/Footer/Footer";

//Home components
import Content from "../Components/Courses/Content";
import Whislist from "../Content/whislist";

//Detail components
import Detail from "../Content/Detail";

//Cart components
import CartHeader from "../Components/CartHeader/CartHeader";
import CartBar from "../Components/CartBar/CartBar";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      totalWis: 0,
      totalCart: 0,
      course: {},
      stars: [],
      rating: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getWishlist(1));
    await this.props.dispatch(getCart(1));
    await this.props.dispatch(getCourses(this.props.match.params.id));
    await this.props.dispatch(getRating(this.props.match.params.id));

    this.setState({
      totalWis: this.props.totalWis,
      totalCart: this.props.totalCart,
      course: this.props.course,
      rating: this.props.rating
    });
  };

  render() {
    const { totalWis, totalCart, course, rating } = this.state;
    const getMatch = this.props.match.path;
    return (
      <Fragment>
        <Navbar totalWis={totalWis} totalCart={totalCart} />
        <Navbar2 />

        {getMatch === "/" ? (
          <Fragment>
            <Content />
          </Fragment>
        ) : null}

        {getMatch === "/detail/:id" ? (
          <div style={{ marginBottom: "80vh" }}>
            <Detail
              course={course}
              rating={rating}
              plusTotalCart={this.plusTotalCart}
            />
          </div>
        ) : null}

        {getMatch === "/cart" ? (
          <div style={{ marginBottom: "0" }}>
            <CartHeader />
            <CartBar />
          </div>
        ) : null}

        {getMatch === "/whislist" ? (
          <div style={{ marginBottom: "80vh" }}>
            <Whislist />
          </div>
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalWis: state.wishlist.range,
    totalCart: state.cart.range,
    course: state.coursesList.course,
    rating: state.rating.rating
  };
};

export default connect(mapStateToProps)(Wrapper);
