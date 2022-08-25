import styled from "styled-components";
import colors from "../colors.json";

export const SearcherStyled = styled.div`
  section {
    display: flex;
    width: 100%;
    height: 240px;
    margin: 0px 0px;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 11px;
    position: absolute;
    top: 90px;
  }

  input {
    &:focus {
      border: 1px solid white;
      outline: none;
    }
  }
  
   .Calendar{
      position: absolute;
   }

  h1 {
    color: ${colors[0].principal};
    font-size: 23px;
    font-weight: 700;
    line-height: 42.19px;
    text-align: center;
  }
  .location {
    width: 345px;
    height: 36px;
    color: Black;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
  .icon {
    color: ${colors[0].titles};
    margin-right: 5px;
  }
  .iconLocation {
    color: ${colors[0].titles};
    position: absolute;
    top: 10px;
    left: 7px;
  }

  .selectLabel {
    color: ${colors[0].titles};
    font-weight: normal;
    font-size: 16px;
    font-weight: 500;
    margin-left: 32px;
  }

  .selectLocation {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
    border-radius: 0px 0px 5px 5px;
  }
  .cities {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: bold;
  }
  .country {
    font-weight: lighter;
    font-size: 11px;
  }

  .search {
    background: ${colors[0].principal};
    color: ${colors[0].background};
    border: none;
    font-weight: 500;
    border-radius: 5px;
    width: 345px;
    height: 40px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }
  .css-1pahdxg-control {
    border-color: ${colors[0].titles};
    box-shadow: none;
  }
  .css-319lph-ValueContainer {
    justify-content: center;
  }
  .rdrMonthAndYearWrapper{
    z-index: 1;
  }
  .css-26l3qy-menu {
    border: 1px solid ${colors[0].principal};
    border-radius: 0 0 5% 5%;
  }
  .css-tlfecz-indicatorContainer {
    color: ${colors[0].titles};
  }

  @media (min-width: 768px) {
    animation: slider 20s infinite;
    width: 100%;
    height: 250px;

    @keyframes slider {
      0%,
      100% {
        background: url(https://homespot-img-grupo2.s3.us-east-2.amazonaws.com/house/pexels-photo-1167021.jpeg)
          no-repeat center -250px;
        background-size: cover;
      }
      25% {
        background-image: url(https://homespot-img-grupo2.s3.us-east-2.amazonaws.com/house/pexels-photo-1268871.jpeg);
      }
      50% {
        background-image: url(https://homespot-img-grupo2.s3.us-east-2.amazonaws.com/house/pexels-photo-258154.jpeg);
      }
      75% {
        background-image: url(https://homespot-img-grupo2.s3.us-east-2.amazonaws.com/house/pexels-photo-91216.jpeg);
      }
    }
    section {
      display: flex;
      width: 100%;
      height: 250px;
      margin: 0px 0px;
      flex-direction: column;
      align-items: center;
      position: absolute;
      flex-wrap: wrap;
      background: rgba(100, 100, 100, 0.5);
    }

    h1 {
      font-size: 45px;
      font-weight: 700;
      top: 20px;
      line-height: 42.19px;
      position: absolute;
      border: 8px solid ${colors[0].principal};
      border-radius: 50% 50% 50% 50%;
      border-top-style: none;
      border-left-style: none;
      border-bottom-style: 0%;
      backdrop-filter: blur(2px);
      height: fit-content;
      width: 650px;
      color: rgba(255, 255, 255, 0.7);
      font-style: italic;
    }
    form {
      display: flex;
      flex-direction: row;
      gap: 10px;
      position: absolute;
      top: 170px;
      width: 650px;
      height: 70px;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      backdrop-filter: blur(2px);
    }
    .location {
      width: 250px;
      height: 40px;
      color: Black;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
    }
    .css-1s2u09g-control{
      height:40px;
    }

    .selectLabel {
      font-weight: normal;
      font-size: 16px;
      font-weight: 500;
      margin-left: 0px;
    }

    .selectLocation {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      box-sizing: border-box;
    }
    .cities {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      font-weight: bold;
    }
    .country {
      font-weight: lighter;
      font-size: 11px;
    }

    .search {
      border: none;
      border-radius: 5px;
      width: 100px;
      height: 40px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    }
  }

  @media (min-width: 1365px) {
    animation: slider 20s infinite;
    width: 100%;
    height: 400px;

    @keyframes slider {
      0%,
      100% {
        background: url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
          no-repeat center -500px;
        background-size: cover;
      }
      25% {
        background-image: url(https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
      }
      50% {
        background-image: url(https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
      }
      75% {
        background-image: url(https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
      }
    }
    section {
      display: flex;
      width: 100%;
      height: 100%;
      margin: 0px 0px;
      flex-direction: column;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
    }

    h1 {
      font-size: 46px;
      width: 850px;
      font-weight: 700;
      line-height: 42.19px;
      top: 30%;
    }
    form {
      display: flex;
      flex-direction: row;
      gap: 30px;
      width: 850px;
      position: absolute;
      top: 300px;
    }
    .location {
      width: 300px;
      height: 40px;
      color: Black;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
    }

    .selectLabel {
      font-weight: normal;
      font-size: 16px;
      font-weight: 500;
      margin-left: 0px;
    }

    .selectLocation {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      box-sizing: border-box;
    }
    .cities {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      font-weight: bold;
    }
    .country {
      font-weight: lighter;
      font-size: 11px;
    }

    .search {
      border: none;
      border-radius: 5px;
      width: 206px;
      height: 40px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    }

    .search:hover {
      color: white;
      border: 1px solid white;
      box-shadow: 0 0 0px ${colors[0].principal}, 0 0 5px ${colors[0].principal},
        0 0 5px ${colors[0].principal};
      background: ${colors[0].principal};
    }
  }
`;
