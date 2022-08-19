import styled from "styled-components";




export const MenuButtonWrapper = styled.button`
  border: none;
  background: transparent;
  position: fixed;
  top: 7%;
  z-index: 100;
  
  
 
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const DivStyled= styled.div`
position: absolute;
left: 80%;
top: 7%;

@media only screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuButtonWrapperExit = styled.div`
position: absolute;
z-index: 100;
left: 40%;
top: 5%;
position: fixed;
@media only screen and (min-width: 768px) {
    display: none;
  }
  
`
