import styled from "styled-components";
import colors from "../colors.json"


export const NavbarWrapper = styled.nav`
  box-shadow: 1px 1px 2px 1px #d4d4d4;
  color: #263238;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top:0;
  right: ${props=> (props.open ? "0" : "-100%")};
  width: 68%;
  height: 100vh;
  z-index: 100;
  transition: right 0.3s linear; 
  #headerMenu{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${colors[0].principal};
  width: 100%;
  height: 17.8vh;
  position: relative;
}
#menu{
padding-right: 12px;
font-size: 24px;
position: relative;
font-weight: 700;
top: 61%;
color: #ffff;
}
#link{
  padding-top: 14px;
  padding-right: 12px;
}
#linkTwo{
  padding-top: 0px;
  padding-right: 12px;
}
a{
  color: #261704;
  font-size: 20px;
  
  
  
}
 #background{
 
  backdrop-filter: blur(30px);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

 }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
