import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import second from './sliders'

function PCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/6v306xm58/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg?updatedAt=1681354087039"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Study Like no Others</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/6v306xm58/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg?updatedAt=1681354069214"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Experienced Mentors</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/6v306xm58/md-duran-1VqHRwxcCCw-unsplash.jpg?updatedAt=1681354064225"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Exclusive Learning Method</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PCarousel;
