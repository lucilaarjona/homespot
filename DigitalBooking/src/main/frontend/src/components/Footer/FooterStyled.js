import styled from "styled-components";

export const FooterStyled = styled.footer`

  border: 1px solid #FBC02D;
  font-family: 'Poppins', sans-serif;
  position: sticky;
  background-color: #FBC02D;
  display: flex;
  width: 100%;
  max-width: 100%;
  max-height:60x;
  

  > .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

  }

  > .container > .icons-socialM{
    display:none;
  }


  > .container > .copyrights{
    color: white;
  }

  @media (min-width: 375px) {



  > .container > .icons-socialM {
    color:white;
    display: inline-flex;
    gap:10px;
    
}

  }


`





