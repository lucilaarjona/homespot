import styled from "styled-components";
import postProduct from "../../../assets/postProduct.png"




export const BoxUbication= styled.div`


@media (min-width: 1365px) {


display: grid;
grid-template-columns: 40% 60%;

.left{
    
    background-color:#008F95;
    background: url(${postProduct}) no-repeat  ;
    background-size: cover;
}}


`

export const Ubication= styled.div`

margin: 4%;
h2{
   
    text-align: center;
}

.map{
    display: flex;
    justify-content: center;

}

input{

width: 92vw;

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
  left: 4%;
  margin-top: 2%;
  margin-bottom: 5rem;
    }

@media (min-width: 768px) {

    input{

width: 94vw;

}

    margin: 3%;

    button{
  
  left: 32%;
  margin-top: 2%;
  margin-bottom: 3.5rem;
    }

}




@media (min-width: 1365px) {

    h2{
        text-align: center;
       
    }
    

margin: 1%;
 input{

    width: 58vw;
    
 }

 .select{

    width: 58vw;


 }




}










`