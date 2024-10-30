import cellPhone from "../../src/Images/mobile.png";
import cellPhone2 from "../../src/Images/mobile3.png";

// import React from "react";
// import Slider from "react-slick";
import Slider from "react-slick";
// Make sure you import the slick-carousel CSS files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function HomeMobileCarousel() {
  var settings = {
    dots: true,
    infinite: true ,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
};
  return (
    <div className="slider-container ">
      <Slider {...settings}>
      <img  className="img-fluid" src={cellPhone2} alt="Mobile" />
      <img  className="img-fluid" src={cellPhone} alt="Mobile" />
      <img  className="img-fluid" src={cellPhone2} alt="Mobile" />
      <img  className="img-fluid" src={cellPhone} alt="Mobile" />
   
     
      </Slider>
    </div>
  );
}
export default HomeMobileCarousel;
