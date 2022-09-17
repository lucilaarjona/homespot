import styled from "styled-components";
import colors from "../../components/colors.json";

export const HeaderAdminStyle = styled.header`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 3px solid ${colors[0].principal};
  }

  .title {
    margin-top: 10px;
    margin-left: 20px;
    color: ${colors[0].principal};
  }

  .title #name {
    font-weight: bold;
    margin-top: -7px;
    font-size: 22px;
  }
  .back {
    margin-top: 10px;
    margin-right: 20px;
  }

  .iconBack {
    font-size: 35px;
    color: ${colors[0].principal};
  }

  @media (min-width: 768px) {
    .title #name {
      font-size: 27px;
    }

    .iconBack {
      font-size: 40px;
    }
  }

  @media (min-width: 1365px) {
    .title #name {
      font-size: 35px;
    }

    .iconBack {
      font-size: 40px;
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FormAdmi = styled.form`

  display: flex;
  flex-direction: column;

  background-color: #d6dbdf;

  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(153, 151, 153, 1);
  width: 80%;

  #input {
    border: 0;
    border-radius: 3px;
    box-shadow: 0px 0px 3px 0px rgba(153, 151, 153, 1);
  }
  #input:focus {
    outline: none !important;
  }

  @media (min-width: 768px) {
    height: auto;
    .box1 {
      display: grid;
      grid-template-columns: 45% 45%;
      justify-content: center;
      margin-bottom: 1%;
      gap: 5%;
    }

    .box1 input {
      width: 100%;
      height: 50px;
    }

    .selectForm {
      width: 100%;
      max-height: 50px;
    }

    .css-319lph-ValueContainer {
      max-height: 50px;
    }

    .text {
      margin-left: 2.5%;
    }
    textarea {
      width: 97.4%;
      height: 140px;
    }

    h3 {
      margin-left: 2.5%;
      padding-top: 3%;
    }

    p {
      margin-left: 2.5%;
    }

    .check {
      margin-left: 2.5%;
      display: grid;
      grid-template-columns: 20% 30%;
    }
    .check input {
      width: 24px;
      height: 22px;
    }
  }
  @media (min-width: 1365px) {
  }
`;
