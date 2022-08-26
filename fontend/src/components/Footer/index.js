import React from "react";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { FooterStyled, Cointaner } from "./FooterStyled";

function Footer () {
  return (
    <Cointaner>
    <FooterStyled>
   
      <div className="container">
        <div className= "copyrights">
          <p> ©2022 Home Spot </p>   
        </div>
          
        <div className = "icons-socialM">
          <BsInstagram/>
          <BsFacebook/>
          <BsTwitter/>
          <FaLinkedinIn/>
        </div>
      </div>
   
     </FooterStyled>
     </Cointaner>
  )
}

export default Footer;


