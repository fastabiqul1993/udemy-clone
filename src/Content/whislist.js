import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Container, Nav } from "react-bootstrap";
import "../CSS/whislist.css";
import Card from "../Components/Card/card";

import { connect } from "react-redux";
import { getWishlist } from "../Publics/Redux/Actions/wishlist";

class whislist extends Component {
  state = {
    wishlist: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getWishlist(3));
    this.setState({
      wishlist: this.props.data.wishlist
    });
  };

  render() {
    return (
      <>
        <Navbar />

        <div className="headerup">
          <Container className="pt-2 pb-2">
            <span className="course">My Course</span>
          </Container>
        </div>
        <Container className="mt-4">
          {this.state.wishlist.map(course => {
            return (
              <div>
                <Card
                  id={course.id_course}
                  title={course.title}
                  image={course.image}
                  price={course.price}
                />
              </div>
            );
          })}
        </Container>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.wishlist
  };
};

export default connect(mapStateToProps)(whislist);
