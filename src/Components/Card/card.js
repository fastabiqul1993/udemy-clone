import React from "react";
import { Card } from "react-bootstrap";

const card = () => {
  return (
    <div>
      <Card style={{ maxWidth: "12rem" }}>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <Card.Img
            variant="top"
            src="https://i.udemycdn.com/course/240x135/874012_c7f2_3.jpg"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "17px" }}>
              The Ultimate Drawing Course - Beginner to...
            </Card.Title>
            <Card.Text style={{ fontSize: "9px" }}>
              Jaysen Batchhelor, Quinton Batch...
            </Card.Text>
            <Card.Text>
              <div style={{ fontSize: "9px" }}>
                <i
                  class="fa fa-star mr-1"
                  style={{ color: "yellow" }}
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-star mr-1"
                  style={{ color: "yellow" }}
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-star mr-1"
                  style={{ color: "yellow" }}
                  aria-hidden="true"
                ></i>
                <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                <i class="fa fa-star-o mr-1" aria-hidden="true"></i>
                <span>4,5</span>
                <span> (60,600)</span>
              </div>
            </Card.Text>
            <Card.Text>
              <h5>Rp168,000</h5>
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
};

export default card;
