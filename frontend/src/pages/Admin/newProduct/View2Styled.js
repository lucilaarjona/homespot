import styled from "styled-components";
// import colors from '../colors.json'

export const BoxViewTwo= styled.div`

display: grid;
grid-template-columns: 40% 60%;

.left{
    
    background-color:#008F95;
    background: url("https://a0.muscache.com/im/pictures/9c3584af-952d-49a0-91b2-efeb1570681a.jpg?im_w=1440") no-repeat center -80px;
    background-size: cover;
}

`

export const ViewTwo = styled.div`


display: flex;
    flex-direction: column;
    justify-content: center;


    .form-control{

        width: 45rem;
    }
    

h2{
    text-align: center;
}
  .boxC {

    display: grid;
    grid-template-columns: 5% 5% 5% 5%;
    row-gap: 10px;
    column-gap: 7rem;
    justify-content: center;
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

  .card {
    width: 40%;
    margin-top: 2%;
  }
  #box2 {
    display: flex;
    justify-content: center;
  }

  .imgBox {
    display: flex;
    flex-direction: column;
  }
  #text{

    height: 20px;

  }

  button{
  background-color: black;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 10px 40px 10px 40px;
  position: relative;
  border: 3px solid #ffffff;
  border-radius: 20px;
  left: 32%;
  margin-bottom: 7rem;
    }


    input[type="checkbox"]{
        margin: 4%;
        width: 2vw;
        height: 20px;
   
}
`;
