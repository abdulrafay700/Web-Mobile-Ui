import cell from "../../src/Images/cell.png"
import watch from "../../src/Images/watch.png"
import headphone from "../../src/Images/headphone.png"



import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function iconCarousel(){
    var settings = {
        dots: false,  // Disable dots for a cleaner look
        infinite: true,  // Ensure the carousel loops infinitely
        speed: 500,
        slidesToShow: 15 ,  // Show 6 items at once
        slidesToScroll: 1,  // Scroll 1 item at a time for a smooth effect
        autoplay: true,
        autoplaySpeed: 1500,  // Speed for the autoplay
        cssEase: "linear",  // Smooth linear scrolling
        pauseOnHover: false,  // Continue scrolling even on hover
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,  // Adjust number of icons for smaller screens
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
    };
      return (
        <div className="slider-container ">
          <Slider {...settings}>
          <img  className="img-fluid" src={cell} alt="Mobile" />
          <img  className="img-fluid" src={watch} alt="Mobile" />
          <img  className="img-fluid" src={headphone} alt="Mobile" />
          <img  className="img-fluid" src={cell} alt="Mobile" />
          <img  className="img-fluid" src={headphone} alt="Mobile" />
          <img  className="img-fluid" src={watch} alt="Mobile" />
          <img  className="img-fluid" src={cell} alt="Mobile" />
          <img  className="img-fluid" src={cell} alt="Mobile" />
          <img  className="img-fluid" src={watch} alt="Mobile" />
          <img  className="img-fluid" src={headphone} alt="Mobile" />
          <img  className="img-fluid" src={cell} alt="Mobile" />
          <img  className="img-fluid" src={headphone} alt="Mobile" />
          <img  className="img-fluid" src={watch} alt="Mobile" />
          <img  className="img-fluid" src={cell} alt="Mobile" />
          <img  className="img-fluid" src={headphone} alt="Mobile" />
       
       
         
          </Slider>
        </div>
      );
}

export default iconCarousel