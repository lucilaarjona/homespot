import styled from "styled-components";
import colors from "../colors.json";

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .initialContainerLogo {
    border: 3px solid ${colors[0].principal};
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-weight: bold;
    background-color: ${colors[0].principal};
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
export const HeaderStyled = styled.header`
  background-color: white;
  text-align: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  box-shadow: 1px 1px 5px #d4d4d4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 1px 10px rgba(0, 0, 0, 0.2);
  .slogan {
    font-size: 20px;
    color: ${colors[0].principal};
    font-style: italic;
    display: none;
    position: absolute;
    margin-left: 80px;
    margin-top: 10px;
  }
  button {
    display: none;
  }
  .container {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 11vh;
    z-index: 1;

    .slogan {
      display: block;
      text-decoration: none;
    }

    .containerButton {
      display: flex;
      justify-content: space-around;
      gap: 10px;
    }
    .initial {
      font-size: 35px;
      /* font-weight: ; */
    }
    .container {
      display: flex;
      flex-direction: row-reverse;
      gap: 20px;
      cursor: default;
      margin-top: 5px;
    }

    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: 43.95px;
      color: ${colors[0].principal};
    }

    .initialContainer {
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
      right: 40.5%;
      top: 20px;
    }

    .initialContainer:hover {
      border: 1px solid ${colors[0].principal};
      background: white;
      color: ${colors[0].principal};
    }

    button {
      display: block;
      color: ${colors[0].principal};
      background: none;
      border: 1.4px solid ${colors[0].principal};
      border-radius: 5px;
      max-height: 43.95px;
    }

    button:hover {
      background: ${colors[0].principal};
      color: white;
    }
  }
  @media screen and (min-width: 1365px) {
    height: 13vh;
    .containerButton {
      display: flex;
      justify-content: center;
      gap: 0px;
      cursor: default;
    }

    img {
      height: 58px;
      width: 100%;
      padding-left: 0;
      background-image: none;
    }
    .initialContainer {
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
      right: 25.8%;
      top: 20px;
    }
    button {
      margin-top: 5px;
    }
  }
  @media screen and (min-width: 1500px){
    .initialContainer {
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
      right: 22.8%;
      top: 20px;
    }
  }
`;
