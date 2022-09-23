import styled from "styled-components";
// import colors from '../colors.json'
import postProduct from "../../../assets/postProduct.png"

export const BoxViewTwo = styled.div`
  @media (min-width: 1365px) {
    display: grid;
    grid-template-columns: 40% 60%;

    .left {
      background-color: #008f95;
      background: url(${postProduct}) no-repeat ;
      background-size: cover;
    }
  }
`;

export const ViewTwo = styled.div`

h3{
  text-align: center;
}

button {

background-color: #008F95;
  font-weight: bold;
  font-size: 1em;
  width: 160px;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 10px 40px 10px 40px;
  position: relative;
  border: 3px solid #ffffff;
  border-radius: 20px;
  left: 8%;
  margin-bottom: 7rem;
}


.boxC {
   
      

  

   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
   justify-content: center;
 }

h2 {
   text-align: center;
   margin-top: 1%;
 }

 .icon {
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      width: 150px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
    }

    .iconSize {
      font-size: 35px;
      color: #008f95;
    }


    #box2 {
    margin: 4%;
    }

    .imgBox {
      display: flex;
      flex-direction: column;
    }

    /* #text{

      width: 21rem;
    } */

    



@media (min-width: 768px) {

  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



  
  .boxC {
   
      

      width: 45rem;
      height: 20rem;

      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

  h2 {
      text-align: center;
    }



  button {

    background-color: #008F95;
      font-weight: bold;
      font-size: 1em;
      width: 160px;
      letter-spacing: 0.1em;
      text-decoration: none;
      color: #ffffff;
      display: inline-block;
      padding: 10px 40px 10px 40px;
      position: relative;
      border: 3px solid #ffffff;
      border-radius: 20px;
      left: 32%;
      margin-bottom: 5rem;
    }

    .icon {
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      width: 140px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
    }

    .iconSize {
      font-size: 50px;
      color: #008f95;
    }

    #box2 {
      display: flex;
      justify-content: center;
    }

    .imgBox {
      display: flex;
      flex-direction: column;
    }
    #text {
      height: 20px;
    }


}
  @media (min-width: 1365px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    input[type="checkbox"] {
      margin: 4%;
      width: 2vw;
      height: 20px;
    }
  }
`;
