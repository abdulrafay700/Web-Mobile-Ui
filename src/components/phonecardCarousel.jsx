import cell from "../../src/Images/Iphone.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function IphoneCardCarousel() {
    var settings = {
        dots: true,  // Disable dots for a cleaner look
        infinite: true,  // Ensure the carousel loops infinitely
        speed: 500,
        slidesToShow: 4,  // Show 3 items at once for desktop
        slidesToScroll: 0,  // Scroll 1 item at a time for a smooth effect
        autoplay: true,
        autoplaySpeed: 1500,  // Speed for the autoplay
        cssEase: "linear",  // Smooth linear scrolling
        pauseOnHover: false,  // Continue scrolling even on hover
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,  // Adjust number of icons for smaller screens
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    };
    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="phone-card  d-flex flex-column justify-content-center align-items-center">
                    <img src={cell} alt="iPhone" className="img-fluid" />
                    <h4 className="mb-0 mt-3">Iphone 14 Pro Max</h4>
                    <h6 className="text-muted">Apple iPhone 14 Pro 512Gb Gold</h6>
                </div>
                <div className="phone-card d-flex flex-column justify-content-center align-items-center">
                    <img src={cell} alt="iPhone" className="img-fluid" />
                    <h4 className="mb-0 mt-3">Iphone 14 Pro Max</h4>
                    <h6 className="text-muted">Apple iPhone 14 Pro 512Gb Gold</h6>
                </div>
                <div className="phone-card d-flex flex-column justify-content-center align-items-center">
                    <img src={cell} alt="iPhone" className="img-fluid" />
                    <h4 className="mb-0 mt-3">Iphone 14 Pro Max</h4>
                    <h6 className="text-muted">Apple iPhone 14 Pro 512Gb Gold</h6>
                </div>
                <div className="phone-card d-flex flex-column justify-content-center align-items-center">
                    <img src={cell} alt="iPhone" className="img-fluid" />
                    <h4 className="mb-0 mt-3">Iphone 14 Pro Max</h4>
                    <h6 className="text-muted">Apple iPhone 14 Pro 512Gb Gold</h6>
                </div>
            </Slider>
        </div>
    );
}

export default IphoneCardCarousel;
