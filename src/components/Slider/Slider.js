import React, { Component } from "react";
import "./Slider.css";
import mario1 from  './img/mario1.jpg';
import mario2 from  './img/mario2.jpg';
import mario3 from  './img/mario3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={mario1} />
        </div>
        <div>
          <img src={mario2} />
        </div>
        <div>
          <img src={mario3} />
        </div>
      </Carousel>
    );
  }
}

export default Slider;
