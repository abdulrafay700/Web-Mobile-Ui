import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";

// social icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";


// images

import logo from "../../src/Images/logo.png";





  
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
                    <div className="col-6">
                        <h3>Largest <span>Wholesalers</span> </h3>
                        <h3>of <span>Mobile Phones</span></h3>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>

            </div>


          
        </>   
    );
}


export default Header;
