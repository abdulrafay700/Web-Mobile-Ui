import cellPhone from "../../src/Images/mobile.png";
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

// function HomeMobileCarousel() {
//   return (
//     <Carousel controls={true} indicators={true}> {/* Controls and indicators enabled */}
//       <Carousel.Item>
//         <div className="right-mble-container">
//           <img src={cellPhone} alt="Mobile" />
//         </div>
//       </Carousel.Item>

//       <Carousel.Item>
//         <div className="right-mble-container">
//           <img src={cellPhone} alt="Mobile" />
//         </div>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default HomeMobileCarousel;





import React from "react";
import Slider from "react-slick";
import cellPhone from "../../src/Images/mobile.png"; 

function HomeMobileCarousel() {
  var settings = {
    dots: true,             // Display dots (pagination)
    infinite: true,         // Infinite scrolling
    speed: 500,             // Transition speed in milliseconds
    slidesToShow: 1,        // Show only one slide at a time
    slidesToScroll: 1,      // Scroll one slide at a time
    vertical: true,         // Enable vertical mode
    verticalSwiping: true,  // Enable vertical swiping
    autoplay: true,         // Auto-play the carousel
    autoplaySpeed: 3000,    // Auto-scroll every 3 seconds
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={cellPhone} alt="Mobile" />
      </div>
      <div>
        <img src={cellPhone} alt="Mobile" />
      </div>
      <div>
        <img src={cellPhone} alt="Mobile" />
      </div>
    </Slider>
  );
}

export default HomeMobileCarousel;



{/* <div className="right-mble-container">
<img src={cellPhone} alt="" />
</div> */}