import styled from "styled-components";
import colors from "../colors.json";
export const CalendarStyled = styled.div`



.rdrDateDisplayWrapper {
    background-color: white;
    cursor: default;
    display: none;
}
  .inputBox {
    background-color: #ffffff;
    color: ${colors[0].titles};
    border: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    border-color: none;
    width: 345px;
    height: 36px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    text-align: center;
    position: relative;
  }

  .rdrMonthPicker {
    border-radius: 5px;
  }
  .rdrYearPicker {
    width: 100px;
  }
  .rdrMonthAndYearWrapper {

    border: none;
    background-color: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
  .rdrMonth {
    width: 345px;
    height: 250px;
    border: none;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    background-color: white;
    z-index: 1;
  }
  .rdrCalendarWrapper {
    font-size: 12px;
    font-weight: bold;
    width: 100%;
    position: absolute;
  }

  .rdrDateDisplayItem input {
    cursor: default;
    color: ${colors[0].titles};
    font-size: 20px;
    font-weight: bold;
    border: none;
  }
  .rdrDateDisplayItem {
    cursor: default;
    color: ${colors[0].titles};
    font-weight: bold;
    box-shadow: none;
    border: none;
  }

  .rdrDateInput {
    cursor: default;
  }

  .rdrMonthAndYearPickers select {
    color: ${colors[0].titles};
    font-size: 18px;
    font-weight: bold;
  }

  .rdrMonthName {
    color: ${colors[0].titles};
    font-size: 12px;
    font-weight: bold;
  }

  .rdrWeekDay {
    font-weight: bold;
    color: ${colors[0].titles};
  }

  .rdrDayNumber {
    font-weight: bold;
    color: ${colors[0].titles};
  }

  .rdrEndEdge {
    background: ${colors[0].principal};
  }

  .rdrStartEdge {
    background: ${colors[0].principal};
  }

  .rdrInRange {
    background: ${colors[0].principal};
  }
  .rdrDayHovered {
    border: none;
  }
  .rdrDayInPreview {
    border: none;
  }
  .rdrDayToday {
    border: none;
  }
  .rdrDayStartPreview {
    border: none;
  }
  .rdrDayEndPreview {
    border: 2px solid ${colors[0].principal};
  }
  .rdrDayDisabled {
    text-decoration: underline;
  }
  .rdrDayToday .rdrDayNumber span:after {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: ${colors[0].principal};
  }

  @media (min-width: 768px) {
    .inputBox {
      background-color: #ffffff;
      color: ${colors[0].titles};
      border: none;
      font-size: 14px;
      font-weight: 500;
      border-radius: 5px;
      border-color: none;
      width: 250px;
      height: 40px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      text-align: center;
     
    }

    /* .rdrCalendarWrapper {
    width: 40%;
    position: absolute;
  } */

  .rdrMonthAndYearPickers select {
    font-size: 12px;
  }

    .rdrCalendarWrapper {
      position: absolute;
      color: #000000;
      font-size: 12px;
      margin-top: 2px;
      width: 39%;
    }
    .rdrDateDisplayWrapper {
    width: 250px;
    border: none;
  }
  .rdrMonthAndYearWrapper {
    width: 250px;
    border: none;
  }
  .rdrMonthPicker {
    border-radius: 5px;
  }
  .rdrYearPicker {
    width: 100px;
    justify-content: center;
    border-radius: 5px;
  }
  .rdrMonthAndYearWrapper {
    width: 250px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white !important;
  }
  .rdrMonth {
    width: 250px;
    height: 250px;
    border: none;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
  }
  .rdrMonthAndYearPickers{
    width:150px;
  }}
  @media (min-width: 1365px) {
    .inputBox {
      background-color: #ffffff;
      color: #607d8b;
      border: none;
      font-size: 14px;
      font-weight: 500;
      border-radius: 5px;
      border-color: none;
      width: 340px;
      height: 36px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      text-align: center;
      position: relative;
      cursor: pointer;
    }
    .inputBox:hover {
      color: white;
      border: 1px solid white;
      box-shadow: 0 0 0px ${colors[0].principal}, 0 0 5px ${colors[0].principal},
        0 0 5px ${colors[0].principal};
      background: white;
      background: linear-gradient(149deg, #efe4e4 0%, #efe4e4 100%);
    }
    .inputBox:hover polyline {
      stroke-dashoffset: -460;
    }

    .rdrMonthAndYearPickers select {
    font-size: 18px;
  }


    .rdrMonthAndYearWrapper {
      width: 340px;
      border-bottom: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: white !important;
    }
    .rdrMonth {
      min-width: 340px;
      border: none;
      border-radius: 0 0 20px 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      height: 100%;
    }
  }
`;
