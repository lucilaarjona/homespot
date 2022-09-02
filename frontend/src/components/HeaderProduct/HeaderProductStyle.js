import styled from "styled-components";
import colors from "../../components/colors.json";

export const HeaderProductStyle = styled.header`
    header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    margin-top: 10px;
    margin-left: 20px;
    color: ${colors[0].principal};
  }

  .title #categorie {
    font-size: 20px;
    color: ${colors[0].titles};
  }
  .title #name {
    font-weight: bold;
    margin-top: -7px;
    font-size: 35px;
  }
  .back {
    margin-top: 10px;
    margin-right: 20px;
  }

  .iconBack {
    font-size: 40px;
    color: ${colors[0].principal};
  }
    section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid ${colors[0].principal};
  }

  section .ubication {
    margin-left: 20px;
    color: ${colors[0].titles};
    font-size: 22px;
  }

  .iconLocation {
    margin-bottom: 5px;
    color: ${colors[0].principal};
    font-size: 30px;
  }


`