import styled from "styled-components";
import logo1 from "../assets/logo 1.png"

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .initialContainerLogo {
    border: 1px solid white;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: rgba(90, 97, 189, 1);
    width: 71px;
    height: 51px;
  }
  .logo2 {
    background: none;
    color: white;
    text-decoration: underline;
    font-size: 30px;
  }


`;
export const HeaderStyled= styled.header`
background-color: white;
text-align: center;
padding: 2rem;
height: 15vh;
position: sticky;
top: 0;
box-shadow: 1px 1px 5px #d4d4d4;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
.slogan {
    font-size: 20px;
    color: rgba(90,97,189,1) ;
    font-style: italic;
    display: none;
    position: absolute;
    margin-left: 80px;
    margin-top: 10px;
  }
button{
    display:none;
}
.container{
  display:none;
}
@media screen and (min-width: 768px)  {
    display: flex;
    justify-content: space-between;
    height: 11vh;
     z-index: 1; 

     .slogan {
      display: block;
      text-decoration: none;
    }

   
    .containerButton{
        display:flex;
        justify-content: space-around;
        gap: 10px;
        
    }
.container{
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  cursor: default;
  margin-top: 5px;
}

.name{
  display: flex;
  align-items: center;
  justify-content: center;
  width:fit-content;
  height: 43.95px;
  color: #fe8700;
}

.initialContainer{
  border: 1px solid white;
  background:  #fe8700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43.95px;
  height: 43.95px;
  color: white;
}

.initialContainer:hover{
  border: 1px solid  #fe8700;
  background:  white;
  color:  #fe8700;

}

button{
  display: block;
  color: #fe8700;
  background: none;
  border: 1.4px solid #fe8700;
  border-radius: 5px;
  max-height: 43.95px;
}

button:hover{
  background: rgb(255,156,80);
background: linear-gradient(0deg, rgba(255,156,80,1) 28%, rgba(254,135,0,1) 100%);
    color: white;
}
}
@media screen and (min-width: 1365px) {
    height: 13vh;
    .containerButton{
        display:flex;
        justify-content: center;
        gap: 0px;
        cursor: default;
    }
    
    img{
    
    height: 58px;
    width: 100%;
    padding-left: 0;
    background-image: none;}
    
    
}
`
