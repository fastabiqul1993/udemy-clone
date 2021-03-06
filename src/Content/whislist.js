import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../CSS/whislist.css";
import Card from "../Components/Card/card";

import { connect } from "react-redux";
import { getWishlist } from "../Publics/Redux/Actions/wishlist";

class whislist extends Component {
  state = {
    wishlist: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getWishlist(1));
    this.setState({
      wishlist: this.props.data.wishlist
    });
  };

  render() {
    return (
      <>
        <div className="headerup">
          <Container className="pt-2 pb-2">
            <span className="course">My Course</span>
          </Container>
        </div>
        <Container className="mt-4 d-flex" style={{ flexWrap: "wrap" }}>
          {this.state.wishlist.map((course, index) => {
            return (
              <div key={index} className="mr-4 mb-4">
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
