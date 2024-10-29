import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
// social icons
import { SiFacebook } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";


// images

import logo from "../../src/Images/logo.png";
import Slider from "../components/HomeCarouselMobile.jsx"




  
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOPen, setIsMenuOpen] = useState(false)

    // for togleer
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOPen)
        console.log(isMenuOPen)  
      }

     

    //   for scrolling

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
            console.log(isScrolled)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

     
    

    return (

        <>

           {/* upper info header */}
            <div className="top-bar-header d-md-block d-none">
                <div className="container  d-flex  justify-content-between">
                  <div className=" d-flex">
                    <p >info@abc.com</p>
                    <p >+123 456 789</p>
                  </div>

                  <div className="d-flex  ">
                    <p >Privacy Policy</p>
                    <p >Term and Condition</p>
                  </div>

                </div>
            </div>

 

            

            <div className="hero-section">
                           {/* menu with logo header */}
        <div className="logo-header container  d-lg-flex  justify-content-between ">
                
                <header className={`container-fluid ${isScrolled?"ps-fixed":"ps-static"} py-2 d-flex align-items-center`}>
              
                <div className='container d-flex justify-content-xl-between justify-content-between'>
                        
                <div className='d-xl-none d-block' >
                            <img src={logo} alt="" />
                    </div>
    
                        {/* navbar */}
                        <nav className='col-12 d-flex align-items-center justify-content-center d-xl-flex d-none' >
                            
                            <ul className="d-flex align-items-center gap-5 ">
                                <li className="">
                                    <a className ="" href="#" >HOME</a>
                                </li>
                                <li>
                                    <a className ="" href="#" >About Us</a>
                                </li>
                                
                                <li>
                                    <a className ="" href="#" >Wholesale</a>
                                </li>
    
                                <li>
                                        <div className='d-lg-block' >
                                            <img src={logo} alt="" />
                                        </div>
                                </li>
    
                                <li>
                                    <a className =""  href="#" >Service</a>
                                </li>
                                <li>
                                    <a className =""  href="#" >News</a>
                                </li>
    
                                <li>
                                    <a className =""  href="#" >How it work</a>
                                </li>
                            </ul>
                        </nav>
    
                        {/* left side login buttons */}
    
                    </div>
    
                    {/* burger button controller */}
                    <div  className="d-xl-none d-block" onClick={()=>toggleMenu()}>
                        { isMenuOPen?(<FaXmark className='menu-icon'/>):(<RxHamburgerMenu className='menu-icon'
                            />)}
                            {/* <RxHamburgerMenu  className="menu-icon"/> */}
                            
                    </div>
                    {/* burger button controller end */}
                </header>
            </div>
    
            {/*===============mobile menu=============  */}
    <div className={`mobile-menu d-xl-none  ${isMenuOPen? "d-flex flex-column" : "d-none"}`}>
            <div className="close-btn icon" onClick={toggleMenu}>
                <FaXmark />
            </div>
    
                    
            <ul className="d-flex flex-column  gap-5">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a  href="#">PAGES</a>
                </li>
                <li>
                    <a  href="#">BLOGS</a>
                </li>
                <li>
                    <a  href="#">SHOP</a>
                </li>
                <li>
                    <a  href="#">ElEMENTES</a>
                </li>
            </ul>
           
        </div>

             {/* header sections end */}
        <div className="hero-container px-5  mx-5  mt-5 pt-3 ">
                            
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h3>Largest <span className='main-text-color'>Wholesalers</span> </h3>
                        <h3>of <span className='main-text-color'>Mobile Phones</span></h3>

                        <p  className='mb-0 mt-5'>Supply that meets Demands. Get the best Whole sale prices of</p>
                        <p className='mb-3'>used and refurbished Mobile Stocks</p>
                        <a className='main-text-color ' href="#">Learn More <i className='ms-2 '><FaArrowRight /></i></a>
                        <div class="form-container mt-3">
                            <div class="email-input-wrapper">
                                <span className='email-Icon'>✉️</span>
                                <input type="email" class="email-input" placeholder="Email" />
                                
                            </div>
                            <button class="subscribe-btn">Subscribe <span className='ms-2'><FaArrowRight /></span> </button>
                            <button class="stock-btn"> <span className='me-2'><FaArrowDown /></span> Stock List</button>
                        </div>
                       

                            {/* social icons list */}
                            <div className="d-flex gap-2 mt-4">
                                <div className="social-icon"><span><RiInstagramFill /></span></div>
                                <div className="social-icon"><span><SiFacebook  /></span></div>
                                <div className="social-icon"><span><IoLogoLinkedin/></span></div>
                                <div className="social-icon"><span><RiInstagramFill /></span></div>
                                <div className="social-icon"><span><RiInstagramFill /></span></div>
                                <div className="social-icon"><span><FaTwitter /></span></div>
                                    {/* people follow */}
                                    <div className="social-followers">
                                        <span className='follow-icon'><MdGroup/></span>
                                        <p>400k People Registered</p>
                                    </div>
                            </div>
                    </div>

                    <div className="col-md-6 col-12 d-flex flex-column align-items-center">
                        {/* mobile carousel */}
                            < Slider/>
                    </div>
                </div>
            </div>
              {/* for border line */}
              <div className="border-lines mt-5">
                                <div className="primary-border mb-2"></div>
                                <div className="secondary-border"></div>
                </div>

            </div>


          
        </>   
    );
}


export default Header;
