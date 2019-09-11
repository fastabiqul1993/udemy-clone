import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Image, Badge } from "react-bootstrap";
import "../../CSS/Navbar.css";

function navbar(props) {
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
              <div className="search-box1 ">
                <input
                  className="search-txt "
                  type="text"
                  placeholder="Search"
                />
                <span className="search-btn">
                  <i className="fas fa-search"></i>
                </span>
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
                  {props.totalWis}
                </Badge>
              </span>
            </div>
          </Link>
          <Link to={`/cart`}>
            <div style={{ margin: "9px 6px" }}>
              <span className="categories">
                <i className="fa fa-shopping-cart fa-lg"></i>
                <Badge className="notif" pill variant="danger">
                  {props.totalCart}
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

export default navbar;
