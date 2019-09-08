import React, { Component } from "react";
import Slider from "react-slick";

export default class Tes extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="container">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>

          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>

          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>
          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>
          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>
          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>
          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>
          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>
          <div>
            <img
              class="d-block w-100"
              src="https://fakeimg.pl/800x400/?retina=1&text=Logo 1&font=noto"
              alt="First slide"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
