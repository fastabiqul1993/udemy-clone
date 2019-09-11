import React, { Component } from "react";
import { getRating } from "../../Publics/Redux/Actions/rating";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

class card extends Component {
  state = {
    rating: [],
    id_course: this.props.id,
    stars: [],
    image: this.props.data.image,
    price: this.props.data.price,
    title: this.props.data.title,
    totalRating: 0
  };

  componentDidMount = async () => {
    await this.props.dispatch(getRating(this.state.id_course));
    this.setState({
      rating: this.props.data.rating
    });

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

  render() {
    const rat = { ...this.state.rating };
    console.log("ini card", this.props);
    return (
      <div>
        <Card
          style={{ maxWidth: "12rem", minHeight: "20rem", maxHeight: "20rem" }}
        >
          <a
            href={`/detail/${this.state.id_course}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Img variant="top" src={this.props.image} />
            <Card.Body>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.props.title}
              </Card.Title>
              <Card.Text style={{ fontSize: "9px" }}>
                Jaysen Batchhelor, Quinton Batch...
              </Card.Text>
              <Card.Text>
                <div style={{ fontSize: "9px" }}>
                  {this.state.stars}

                  <span>{rat.averageRating}</span>
                  <span> ({this.state.totalRating})</span>
                </div>
              </Card.Text>
              <Card.Text>
                <h5>Rp.{this.props.price}</h5>
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.rating
  };
};

export default connect(mapStateToProps)(card);
