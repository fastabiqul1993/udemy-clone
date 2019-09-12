//React components
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Redux actions
import { getRating } from "../../Publics/Redux/Actions/rating";

//Components style
import { Card } from "react-bootstrap";
import "./card.css";

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
    for (let i = 1; i <= 5; i++) {
      if (avgRating - i >= 0) {
        starsTmp.push(
          <i
            key={i}
            className="fa fa-star mr-1"
            style={{ color: "yellow" }}
            aria-hidden="true"
          ></i>
        );
      } else {
        starsTmp.push(
          <i key={i} className="fa fa-star-o mr-1" aria-hidden="true"></i>
        );
      }
    }
    this.setState({ stars: starsTmp });
    //end of rendering stars////////////////////////////////////////////////////
  };

  render() {
    const rat = { ...this.state.rating };
    return (
      <div>
        <Card
          style={{ maxWidth: "12rem", minHeight: "20rem", maxHeight: "20rem" }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/detail/${this.state.id_course}`}
          >
            <Card.Img variant="top" src={this.props.image} />
            <Card.Body>
              <Card.Title className="texts pb-1">{this.props.title}</Card.Title>
              <Card.Text style={{ fontSize: "9px" }}>
                Jaysen Batchhelor, Quinton Batch...
              </Card.Text>
              <Card.Text style={{ fontSize: "9px" }}>
                {this.state.stars}

                <span>{rat.averageRating}</span>
                <span> ({this.state.totalRating})</span>
              </Card.Text>
              <Card.Text>
                Rp.
                {this.props.price.toLocaleString(navigator.language, {
                  minimumFractionDigits: 0
                })}
              </Card.Text>
            </Card.Body>
          </Link>
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
