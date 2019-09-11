import React from "react";
import { Nav } from "react-bootstrap";

function navbar2() {
  return (
    <div className="nav2 ">
      <div className="d-flex justify-content-center">
        <Nav.Link>
          <span className="categories">
            <i className="fas fa-laptop-code"></i>
            {" My Courses"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fa fa-area-chart"></i>
            {" Business"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fa fa-desktop"></i>
            {" IT & Software"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fa fa-list-alt"></i>
            {" Office Productivity"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fa fa-book"></i>
            {" Personal Development"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fas fa-pencil-ruler"></i>
            {" Design"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fa fa-bullseye"></i>
            {" Marketing"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fa fa-heartbeat"></i>
            {" Health & Fitness"}
          </span>
        </Nav.Link>
        <Nav.Link>
          <span className="categories">
            <i className="fa fa-music"></i>
            {" Music"}
          </span>
        </Nav.Link>
      </div>
    </div>
  );
}
export default navbar2;
