import React from "react";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { FooterStyled } from "./FooterStyled";

function Footer () {
  return (
    <FooterStyled>
      <div className="container">
        <div className= "copyrights">
          <p> ©2022 Digital Booking </p>   
        </div>
          
        <div className = "icons-socialM">
          <BsInstagram/>
          <BsFacebook/>
          <BsTwitter/>
          <FaLinkedinIn/>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer;


