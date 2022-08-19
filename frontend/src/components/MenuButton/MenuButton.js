import React from 'react'
import {MenuButtonWrapper, DivStyled, MenuButtonWrapperExit} from "./MenuButtonStyled"
import menu from "../../assets/menu.png"
import exit from "../../assets/X.png"


const MenuButton = ({ open, handleClick }) => {
  return (<>{!open ? (
    <DivStyled>
    <MenuButtonWrapper onClick={handleClick}>
      
      
     <img src={menu} alt="fab icon" /> 
     
    </MenuButtonWrapper>
    </DivStyled>
   
  ) : (
    <MenuButtonWrapperExit>
    <MenuButtonWrapper  onClick={handleClick}>
    <img src={exit} alt="exit icon" />
    </MenuButtonWrapper>
    </MenuButtonWrapperExit>


  )}
 
  </>
  );
}

export default MenuButton