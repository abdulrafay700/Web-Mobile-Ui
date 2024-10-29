import cellPhone from "../../src/Images/mobile.png";
import cellPhone2 from "../../src/Images/mobile2.png";

// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

// function HomeMobileCarousel() {
//   return (
//     <Carousel controls={true} indicators={true}> {/* Controls and indicators enabled */}
//       <Carousel.Item>
//         <div className="right-mble-container">
//           <img className="img-fluid" src={cellPhone} alt="Mobile" />
//         </div>
//       </Carousel.Item>

//       <Carousel.Item>
//         <div className="right-mble-container">
//           <img  className="img-fluid" src={cellPhone2} alt="Mobile" />
//         </div>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default HomeMobileCarousel;





import React from "react";
import Slider from "react-slick";

function HomeMobileCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 0,
  };
  return (
    <Slider {...settings}>
        
        <div className="right-mble-container">
          <img className="img-fluid" src={cellPhone} alt="Mobile" />
      </div>

      <div className="right-mble-container">
         <img className="img-fluid" src={cellPhone2} alt="Mobile" />
       </div>
            
    </Slider>
  );
}
export default HomeMobileCarousel;



{/* <div className="right-mble-container">
<img src={cellPhone} alt="" />
</div> */}