import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../src/images/001.jpg";
import img2 from "../../src/images/002.jpg";

const Carouse = () => {
  return (
    <>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={8000}
        stopOnHover={false}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={true}
      >
        <div>
          <img src={img1} alt="item1" />
        </div>
        <div>
          <img src={img2} alt="item2" />
        </div>
      </Carousel>
    </>
  );
};

export default Carouse;
