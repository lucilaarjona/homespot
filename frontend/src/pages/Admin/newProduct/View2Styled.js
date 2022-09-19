import styled from "styled-components";
// import colors from '../colors.json'

export const ViewTwo = styled.div`
  .boxC {

    display: grid;
    grid-template-columns: 9% 9% 9% 9%;
    row-gap: 10px;
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
    font-size: 38px;
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
`;
