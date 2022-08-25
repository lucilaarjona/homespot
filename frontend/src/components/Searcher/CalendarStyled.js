import styled from "styled-components";
import colors from "../colors.json";
export const CalendarStyled = styled.div`
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
  .rdrDateDisplayWrapper {
    width: 345px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${colors[0].principal} !important;
    z-index: 100;
  }
  .rdrMonthAndYearWrapper {
    width: 345px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${colors[0].principal} !important;
  }
  .rdrMonthPicker {
    color: ${colors[0].principal} !important;
    background: ${colors[0].principal};
    border-radius: 5px;
  }
  .rdrYearPicker {
    background: ${colors[0].principal};
    width: 100px;
    justify-content: center;
    border-radius: 5px;
  }
  .rdrMonthAndYearWrapper {
    width: 345px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white !important;
  }
  .rdrMonth {
    width: 345px;
    height: 250px;
    border: none;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white !important;
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

    .rdrCalendarWrapper {
      position: absolute;
      color: #000000;
      font-size: 12px;
      margin-top: 2px;
    }
    .rdrDateDisplayWrapper {
    width: 250px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${colors[0].principal} !important;
  }
  .rdrMonthAndYearWrapper {
    width: 250px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${colors[0].principal} !important;
  }
  .rdrMonthPicker {
    color: ${colors[0].principal} !important;
    background: ${colors[0].principal};
    border-radius: 5px;
  }
  .rdrYearPicker {
    background: ${colors[0].principal};
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
    background-color: white !important;
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

    .rdrDateDisplay {
      color: ${colors[0].principal} !important;
    }
    .rdrDayStartPreview {
      color: ${colors[0].principal} !important;
    }
    .rdrStartEdge {
      color: ${colors[0].principal} !important;
    }
    .rdrEndEdge {
      color: ${colors[0].principal} !important;
    }
    .rdrInRange {
      color: ${colors[0].principal} !important;
    }
    .rdrDayEndPreview {
      color: ${colors[0].principal} !important;
    }
    .rdrDayNumber {
      color: ${colors[0].principal} !important;
    }
    .rdrDayStartWeek {
      color: ${colors[0].principal} !important;
    }
    .rdrDayEndWeek {
      color: ${colors[0].principal} !important;
    }
    .rdrDayWeekend {
      color: ${colors[0].principal} !important;
    }
    .rdrDay {
      color: ${colors[0].principal} !important;
    }
    .rdrDay .rdrDayToday {
      color: ${colors[0].principal} !important;
    }
    .rdrDayNumber {
      color: ${colors[0].principal} !important;
    }
    .rdrDayHovered {
      color: ${colors[0].principal} !important;
    }
    .rdrDayActive {
      color: ${colors[0].principal} !important;
    }
    span .rdrDayNumber {
      color: ${colors[0].principal} !important;
    }
    .rdrDateDisplayWrapper {
      width: 340px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: ${colors[0].principal};
    }
    

    .rdrMonthAndYearWrapper {
      width: 340px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: (255, 156, 80) !important;
    }
    .rdrMonthPicker {
      color: (255, 156, 80) !important;
      background: ${colors[0].principal};
      border-radius: 5px 5px 5px 5px;
    }
    .rdrYearPicker {
      background: ${colors[0].principal};
      width: 100px;
      justify-content: center;
      border-radius: 5px 5px 5px 5px;
    }

    .rdrMonthAndYearWrapper {
      width: 340px;
      border-bottom: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: white !important;
    }
    .rdrMonth {
      width: 340px;
      border: none;
      border-radius: 0 0 20px 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: white !important;
    }
  }
`;
