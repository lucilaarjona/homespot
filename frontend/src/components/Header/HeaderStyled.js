import styled from "styled-components";
import colors from '../colors.json'


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;

  img{
    width: 82px;
  }
 

  

  .initialContainer {
    border: 3px solid ${colors[0].background};
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-weight: bold;
    /* background-color:${colors[0].principal}; */
    width: 71px;
    height: 51px;
  }
 
  .logo2 {
    background: none;
    color: ${colors[0].background};
    border-radius: 20%;
    text-decoration: underline;
    font-size: 30px;
  }


`;

export const HeaderStyled = styled.header`
  background: ${colors[0].background};
  text-align: center;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  box-shadow: 1px 1px 5px #d4d4d4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 1px 10px rgba(0, 0, 0, 0.2);
    //la siguiente linea se agrega para que funcione layout en mobile 
    z-index: 2;
 .slogan {
    font-size: 20px;
    color: ${colors[0].principal} ;
    display: none;
    position: absolute;
    margin-left: 80px;
    margin-top: 39px;
  }
  
  .initial{
    display: none;
  }
  .name{
    display: none;
  }

  .initialA{
    display: none;
  }
  .nameA{
    display: none;
  }
  
  
 
  button {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 11vh;
    z-index: 1;

    .nameA {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      color: ${colors[0].principal};
      width: fit-content;
    }

    .initialA{
      display: block;
      font-size: 28px;
    }

    .admibtn{
      width: 100px;
      height: 50px;
    }
   

    .nameContainerA {
      border: 1px solid white;
      background: ${colors[0].principal};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      color: white;
      position: absolute;
      right: 25rem;
      top: 31px;
      
    }

    .nameContainerA:hover {
      border: 1px solid ${colors[0].principal};
      background: white;
      color: ${colors[0].principal};
    }
    .initial {
      font-size: 35px;
    
    }




    .slogan {
      display: block;
      text-decoration: none;
      margin-top:10px;
    }

    .containerButton {
      display: flex;
      justify-content: space-around;
      gap: 20px;
    }
    button {
      position: relative;
      background: none;
      border: 1.4px solid  ${colors[0].principal};
      border-radius: 5px;
      width: 10.4rem;
      height: 2.4rem;
      font-weight: 700;
      font-size: 16px;
      color: ${colors[0].principal};
    }

    button {
      display: block;
    }
    button:hover {
      background: ${colors[0].principal};
      color: ${colors[0].background};
      border: 1px solid ${colors[0].background};
    }

    
    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: 43.95px;
      color: ${colors[0].principal};
      width: fit-content;
    }

    .initial{
      display: block;
    }
   

    .nameContainer {
      border: 1px solid white;
      background: ${colors[0].principal};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70.95px;
      height: 70.95px;
      color: white;
      position: absolute;
      right: 20rem;
      top: 20px;
    }

    .nameContainer:hover {
      border: 1px solid ${colors[0].principal};
      background: white;
      color: ${colors[0].principal};
    }
    .initial {
      font-size: 35px;
    
    }
  }
  @media screen and (min-width: 1365px) {
    height: 13vh;
    backdrop-filter: blur(30px);

    .nameContainerA {
      border: 1px solid white;
      background: ${colors[0].principal};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70.95px;
      height: 70.95px;
      color: white;
      position: absolute;
      right: 34rem;
      top: 20px;
    }

    .nameContainerA:hover {
      border: 1px solid ${colors[0].principal};
      background: white;
      color: ${colors[0].principal};
    }



    .containerButton {
      display: flex;
      justify-content: space-around;
      gap: 20px;
    }
    .nameContainer {
      border: 1px solid white;
      background: ${colors[0].principal};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70.95px;
      height: 70.95px;
      color: white;
      position: absolute;
      right: 20rem;
      top: 20%;
    }

    .admibtn{
      width: 10.4rem;
      height: 2.4rem;
      
    }

    

  }
`;
