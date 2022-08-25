import styled from "styled-components";
import colors from "../colors.json";

export const Cointaner = styled.div`
  height: 6rem;
`;

export const FooterStyled = styled.footer`
  position: sticky;
  bottom: 0;
  background: ${colors[0].background};
  display: flex;
  width: 100%;
  max-width: 100%;
  max-height: 60px;
  margin-top: 30px;
  box-shadow: 1px 1px 5px #d4d4d4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 1px 10px rgba(0, 0, 0, 0.2);

  > .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: ${colors[0].principal};
  }
  > .container > .icons-socialM {
    display: none;
  }
  > .container > .copyrights {
    color: ${colors[0].principal};
  }
  @media (min-width: 768px) {
    position: fixed;

    > .container > .icons-socialM {
      ${colors[0].principal};
      display: inline-flex;
      gap: 10px;
    }
  }
`;
