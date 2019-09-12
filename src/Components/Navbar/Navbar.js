//React components
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Redux actions
import Autosuggest from "react-autosuggest";
//Style components
import { Navbar, Nav, Form, Image, Badge } from "react-bootstrap";
import "../../CSS/Navbar.css";
import "../../CSS/autoSuggest.css";

// Teach Autosuggest how to calculate suggestions for any given input value.

const getSuggestions = (value, data) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : data.filter(
        lang => lang.title.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <span>{suggestion.title}</span>;

class navbar extends Component {
  state = {
    value: "",
    suggestions: []
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.courseList)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleOnDetail = val => {
    // this.props.history.push(`/detail/${id}`);
    let found = this.props.courseList.find(function(target) {
      if (target.title === val) {
        return target;
      }
    });

    this.props.history.push(`/detail/${found.id}`);

    // console.log(found);
  };

  render() {
    const { totalWis, totalCart } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };

    return (
      <Fragment>
        <Navbar
          bg="light"
          variant="light"
          className="justify-content-center nav1"
        >
          <div className=" d-flex">
            <Link to={`/`}>
              <Navbar.Brand>
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                  width="100"
                  height="30"
                />
              </Navbar.Brand>
            </Link>
            <Nav.Link className=" mr-3 left">
              <span className="icon">
                <i className="fas fa-th fa-sm"></i>
              </span>
              <span className="categories">Categories</span>
            </Nav.Link>
            <Nav.Item className="">
              <Form inline>
                <div style={{ cursor: "pointer" }} className="search-box1 ">
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={
                      this.onSuggestionsFetchRequested
                    }
                    onSuggestionsClearRequested={
                      this.onSuggestionsClearRequested
                    }
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                  />
                  {this.state.value ? (
                    <span
                      onClick={() => this.handleOnDetail(this.state.value)}
                      className="search-btn"
                    >
                      <i className="fas fa-search"></i>
                    </span>
                  ) : null}
                </div>
              </Form>
            </Nav.Item>
            <Nav.Link>
              <span className="categories">Teach on Udemy</span>
            </Nav.Link>
            <Nav.Link>
              <span className="categories">My Courses</span>
            </Nav.Link>
            <Link to={`/whislist`}>
              <div style={{ margin: "9px 6px" }}>
                <span className="categories">
                  <i className="fa fa-heart-o fa-lg"></i>
                  <Badge className="notif" pill variant="danger">
                    {totalWis}
                  </Badge>
                </span>
              </div>
            </Link>
            <Link to={`/cart`}>
              <div style={{ margin: "9px 6px" }}>
                <span className="categories">
                  <i className="fa fa-shopping-cart fa-lg"></i>
                  <Badge className="notif" pill variant="danger">
                    {totalCart}
                  </Badge>
                </span>
              </div>
            </Link>
            <Nav.Link>
              <span className="categories">
                <i className="fa fa-bell-o fa-lg" aria-hidden="true"></i>
              </span>
            </Nav.Link>
            <Nav.Link>
              <Image
                src="./img/user.png"
                height="25px"
                width="25px"
                roundedCircle
              />
            </Nav.Link>
          </div>
        </Navbar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalWis: state.wishlist.range,
    totalCart: state.cart.range,
    courseList: state.coursesList.coursesList
  };
};

export default connect(mapStateToProps)(navbar);
