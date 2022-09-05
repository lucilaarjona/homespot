import styled from "styled-components";
import colors from "../../components/colors.json";

export const BookingStyle = styled.section`
  h2 {
    font-size: 22px;
  }

  .form {
    padding: 10px;
    margin: 3%;
    background-color: #fbf1e9;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(153, 151, 153, 1);
    height: 16rem;
  }
  .label {
    font-size: 17px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
  }

  input {
    border: 0;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px rgba(153, 151, 153, 1);
  }

  input:focus {
    outline: none !important;
  }
   .calendarElementDesktop{
    display: none;
  }
  .calendar {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  }
  .calendar h2 {
    color: ${colors[0].titles};
  }
  .rdrCalendarWrapper {
    font-size: 12px;
    width: 100%;
  }
  .rdrDateDisplayWrapper {
    background-color: white;
    cursor: default;
  }
  .rdrDateDisplayItemActive {
    color: white;
  }
  .rdrDateDisplayItemActive input {
    color: none;
  }
  .rdrMonths {
    display: flex;
    justify-content: center;
  }

  .rdrMonthName {
    display: flex;
    flex-direction: row-reverse;
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
    font-size: 16px;
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
    content: "";
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: ${colors[0].principal};
  }
span .rdrYearPicker select {
    position: relative;
  }

  @media (min-width: 768px) {
    h2 {
      margin: 2%;
    }

    .form {
      margin: 2%;

      display: grid;
      grid-template-columns: 41% 41%;
      grid-template-rows: 24% 24%;
      gap: 34%;
      column-gap: 5%;
      justify-content: center;
      width: 90%;
      height: 12rem;
    }

    input {
      padding: 0.4rem;
    }
    .calendarElementDesktop{
    display: none;
  }

  .rdrCalendarWrapper {
    font-size: 16px;
    width: 100%;
  }
  }

  @media (min-width: 1365px) {
    /* display: grid;
    grid-template-columns: 70% 30%;
    height: 1000px;
    margin-left: 20px;
    margin-top: 50px; */

    display: grid;
    grid-template-columns: 60% 40%;

    h2 {
      font-size: 30px;
      margin: 1%;
      margin-bottom: 2%;
    }

    .form {
      grid-template-columns: 44% 44%;
      width: 90%;
      margin: 1%;
      height: 18rem;
      row-gap: 18%;
    }
    input {
      padding: 0.8rem;
    }
    .label {
      font-size: 19px;
      margin-top: 8%;
    }
    .left{
      display: flex;
      flex-direction: column;
      height: fit-content;
      justify-content: center;
      align-items: center;
    }
    .calendar {
    }
    .select {
      margin-bottom: 13%;
    }
    .bookingDatail {
    }
    .calendarElement{
    display: none;
  }
  .menuList{
    background-color: red;
  }

  .selectLabel{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .calendarElementDesktop{
    display: contents;
  }
  .rdrCalendarWrapper {
    font-size: 14px;
    width: 100%;
  }
  }

`;
