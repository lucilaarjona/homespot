import styled from "styled-components";
// import colors from '../colors.json'
import postProduct from "../../../assets/postProduct.png"



export const BoxIntro = styled.div`
@media (min-width: 1365px) {

display: grid;
grid-template-columns: 40% 60%;

.left{
    
    background-color:#008F95;
    background: url(${postProduct}) no-repeat ;
    background-size: cover;
}

}



`
export const IntroS = styled.div`

display: flex;
    justify-content: center;

h2{
    text-align: center;
    margin-top: 1%;
}

img{

    width: 60px;
    height: 50px;
    border-radius: 5px;
    margin-left: -4.5rem;
    
   
}



  

  .form-check-input {
    margin-left: 1.2rem;
  }

  .productList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .boxProduct {
    border-radius: 10px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  }

  .icon {
    font-size: 40px;
    color: #008f95;
  }

  .title {
   
    font-size: 16px;
    margin-left: 4%;
    
  }
  

  .form-control {
    width: 91.5vw;
  }

  .title2 {
    font-size: 17px;
    margin-top: 2%;
  }


  button{
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
  margin-bottom: 4rem;
    }


    input[type="radio"]{
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    width: 92vw;
    height: 60px;
    border-radius: 10px;
    position: absolute;
    box-shadow: 7px 7px 15px rgba(2,28,53,0.08);
    cursor: pointer;
    outline: none;
    z-index: -1;
    right: 1.2rem;
}

  @media (min-width: 768px) {

    

    display: flex;
    justify-content: center;
    



    .boxProduct {
      width: 92vw;
      height: 10vw;
     
      justify-content: space-between;
    }

    .icon {
      font-size: 54px;
      color: #008f95;
    }

    .title {
      font-size: 18px;
    }

    .title2 {
      font-size: 17px;
      margin-top: 2%;
    }

    button{
        left: 40%;
    }

    .boxImg{
        margin-right: 1%;
        
        
  }

  .title{
    margin-left: 1.8vw;
    
  }

  img{

width: 100px;
height: 4rem;
border-radius: 5px;

}



input[type="radio"]{
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    width: 92vw;
    height: 10vw;
    border-radius: 10px;
    position: absolute;
    box-shadow: 7px 7px 15px rgba(2,28,53,0.08);
    cursor: pointer;
    outline: none;
    z-index: -1;
    right: 4%;
}
  }

  @media (min-width: 1365px) {



      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
      
      img{
  
  width: 100px;
  height: 80px;
  border-radius: 5px;
  
  }


  textarea{


    height:200px ;
  }
    

    .form-check-input {
      margin-left: 1.2rem;
    }

    .productList {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }

    .boxProduct {

      width: 58vw;
      height: 100px;
      
      
      display: flex;
      justify-content: space-between;
      

      
    }


    .form-control {
      width: 58vw;
    }

    .title2 {
      font-size: 17px;
      margin-top: 2%;
    }

   

    .boxImg{
        margin-right: 0.5%;
        
        
  }

  .title{
    margin-left: 0.5%;
    
  }

  .form-check-input{
    position: absolute;
    
  }

  input[type="radio"]{
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    width: 58vw;
      height: 100px;
    border-radius: 10px;
    /* position: absolute; */
    box-shadow: 7px 7px 15px rgba(2,28,53,0.08);
    cursor: pointer;
    outline: none;
    z-index: -1;
    right: 15px;
}
 
}

`;
