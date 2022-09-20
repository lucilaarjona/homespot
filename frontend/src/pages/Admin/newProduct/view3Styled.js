import styled from "styled-components";
// import colors from '../colors.json'
import postProduct from "../../../assets/postProduct.png"


export const BoxViewThree= styled.div`

@media (min-width: 1365px) {

display: grid;
grid-template-columns: 40% 60%;
height: 80vh;

.left{
    
    background-color:#008F95;
    background: url(${postProduct}) no-repeat;
    background-size: cover;
}
}

`

export const ViewThree= styled.div`


h2{
    margin-top: 1%;

}

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.btn{
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
  
  margin: 0.5rem;
  margin-bottom: 6rem;
  
    }

    #btn{
        border: solid;
        background-color: #ffff;
        color: #008F95;
       
        
    }

    #btn:hover{
        background-color: #E24E42;
        
        color: #ffff;
    }


@media (min-width: 768px) {

.btn{
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
  left: 4%;
  margin: 5rem;
  
    }

    #btn{
        border: solid;
        background-color: #ffff;
        color: #008F95;
        width: 250px;
        
    }

    #btn:hover{
        background-color: #E24E42;
        
        color: #ffff;
    }}

    




`