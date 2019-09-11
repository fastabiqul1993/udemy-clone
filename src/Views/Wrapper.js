import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//Redux Actions
import { getWishlist } from "../Publics/Redux/Actions/wishlist";
import { getCart } from "../Publics/Redux/Actions/cart";

//Main components
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/navbar2";
import Footer from "../Components/Footer/Footer";

//Components
import Hero from "../Components/Hero/Hero";
import CourseContent from "../Components/CourseContent/CourseConten";
import StudentFeedback from "../Components/StudentFeedBack/StudentFeedback";
import Comment from "../Components/Comment/Comment";
import CartHeader from "../Components/CartHeader/CartHeader";
import CartBar from "../Components/CartBar/CartBar";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      totalWis: 0,
      totalCart: 0
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getWishlist(3));
    await this.props.dispatch(getCart(1));

    this.setState({
      totalWis: this.props.totalWis,
      totalCart: this.props.totalCart
    });
  };

  render() {
    const { totalWis, totalCart } = this.state;
    // console.log(totalWis, "ini wish");
    return (
      <Fragment>
        <Navbar totalWis={totalWis} totalCart={totalCart} />
        <Navbar2 />
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
    totalWis: state.wishlist.range,
    totalCart: state.cart.range
  };
};

export default connect(mapStateToProps)(Wrapper);
