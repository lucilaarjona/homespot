import styled from "styled-components";
import colors from "../../components/colors.json";
export const ProductStyled = styled.section`
  width: 100%;
  height: 100%;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${colors[0].principal};
    align-items: center;
  }

    margin-top: 10px;
    margin-left: 20px;
    color: ${colors[0].background};
  }

  .title #categorie {
    font-weight: lighter;
  }
  .title #name {
    font-weight: bold;
    margin-top: -7px;
    font-size: 20px;
  }
  .back {
    margin-top: 10px;
    margin-right: 20px;
  }
  .back a {
    color: ${colors[0].background};
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: beige;
  }

  section .ubication{
    margin-left:20px;
    color:${colors[0].titles};
  };

  .score{
    font-size: 15px;
  }

  .galery{
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items:center;
  }
  .miniGalery{
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
