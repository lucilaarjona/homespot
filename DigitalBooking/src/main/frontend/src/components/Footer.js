import React from "react";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icon/bs'
import {FooterStyled} from "../Styles/FooterStyled";


function Footer () {
  return (
    <FooterStyled>
    <footer>
    <div className="container">
        <div className= "copyrights">
         <img src=""></img>
        <p> ©2022 Digital Booking </p>   
        </div>
        
        <div className = "icons-socialM">
            <BsInstagram/>
            <BsFacebook/>
            <BsTwitter/>
        </div>
         </div>
        </footer>
        </FooterStyled>
  )
}

export default Footer;


