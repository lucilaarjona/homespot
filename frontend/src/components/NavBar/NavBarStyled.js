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
  right: ${props => (props.open ? "0" : "-100%")};
  width: 68%;
  height: 100vh;
  z-index: 2;
  transition: right 0.3s linear;

  .box{
   position: relative;
   right: 38px;
   top: 15px;

  }

.nameContainer {
  border: 1px solid white;
  background: ${colors[0].principal}; 
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 50.95px;
  height: 50.95px;
  color: white;
  top: 20px;
  flex-direction: column;
  margin-bottom: 7%;
  
  
}
.nameContainer:hover {
  border: 1px solid ${colors[0].principal}; 
  background: white;
  color: ${colors[0].principal};
} 
.initial { 
  font-size: 20px;  
  
}  
.name{
  color: #ffff;

}

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
 button{
  background: none;
  color: #261704;
  font-size: 20px;
  font-weight: 500;
	border: none;
	cursor: pointer;
	
 }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
