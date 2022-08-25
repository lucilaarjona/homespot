import styled from "styled-components";
import colors from "../colors.json";

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    position: relative;
    gap: 20%;
    margin-left: 10%;
    color: ${colors[0].titles};
  }
  .showAll{
    border: none;
    background-color: none;
    background: white;
  }
  .titlePrincipal{
    cursor:default;
    margin-left: -6%;
    z-index: -1;
  }
  .showAll h4{
    font-size: 15px;
    color: ${colors[0].titles};
    
  }
  .showAll{
    display: flex;
    gap: 3px;
    margin-left: -20px;
    margin-top: 2px;
  }
  .iconSee{
    color: ${colors[0].principal2};
    margin-top: 4px;
    font-size: 25px;
    margin-top: -5px;
  }
   h4 {
    font-size: 20px;
  }
  @media(min-width: 768px) {
    h4 {
      font-size: 30px;
    }
    .showAll h4{
    font-size: 15px;
    color: ${colors[0].titles};
  }
  .showAll{
    display: flex;
    gap: 10px;
    margin-left: 120px;
    margin-top: 15px;
  }
  .iconSee{
    color: ${colors[0].principal2};
    margin-top: 0px;
    font-size: 20px;
  }
  .titlePrincipal{
    cursor:default;
    margin-left: -2%;
  }
  }
  @media (min-width:1365px){
    .title {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    position: relative;
    gap: 60%;
    margin-left: 10%;
    color: ${colors[0].titles};
  }
  .titlePrincipal{
    margin-left: -70px;
    cursor:default
  }
  .showAll{
    margin-top: 1px;
    margin-left: 150px;
  }
  .showAll h4{
    font-size: 15px;
    color: ${colors[0].titles};
    margin-top: 6px;
    
  }
  .iconSee{
    color: ${colors[0].principal2};
    margin-top: 1px;
    font-size: 25px;
  }
  }
`;
export const CardStyled = styled.div`
  max-width: 370px;

  .accordion {
    width: auto;
  }

  .accordion-item {
    -webkit-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    -moz-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    border-radius: 1rem;
    padding: 0.7%;
    color: none;
    width: 327px;
  }

  img {
    min-width: 326px;
    max-width: 326px;
    height: 220px;
    padding-right: 2%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    cursor: pointer;
  }

  .accordion-item:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.1, 0.575, 0.585, 1) both;
    cursor: pointer;

  }
  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.009);
    }
  }

  p {
    cursor: default;
  }

  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors[0].titles};
  }

  @media screen and (min-width: 1365px) {
    max-width: 340px;

    img {
      max-width: 326px;
      height: 220px;
      padding-right: 2%;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      cursor: pointer;
    }

    .accordion {
      width: auto;
    }

    .accordion-item {
      -webkit-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
      -moz-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
      box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
      border-radius: 1rem;
      padding: 0.7%;
    }
    .accordion-item:hover {
      cursor: pointer;
    }
    .accordion-item:before {
      content: "";
      ${"" /* background: rgba(237, 235, 234 ) ; */}
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
    }
    .accordion-item:active {
      color: #000;
    }
    .accordion-item:active:after {
      background: transparent;
    }
    .accordion-item:hover:before {
      opacity: 1;
    }

    .accordion-item:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
    @keyframes glowing {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }

    img {
      width: 402px;
      height: 220px;
      padding-right: 2%;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    h2 {
      max-width: 325px;
    }
  }
`;

export const Cointaner = styled.div`
  display: grid;
  justify-content: center;
  background-color: none;
`;
export const Categories = styled.section`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }

  @media screen and (min-width: 1365px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
  }
`;
