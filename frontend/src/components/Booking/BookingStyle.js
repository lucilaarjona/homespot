import styled from "styled-components";
import colors from "../../components/colors.json";

export const BookingStyle = styled.section`

  .boxcalendar{
    background-color:#F1F1F1;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(153, 151, 153, 1);
    width: 90%;
  }
  .price{
    font-size: 25px;
    font-weight: bold;
    text-decoration: underline;

  }
  .paypalNone{
    display: none;
  }

  .pay{
    font-size: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 15px;
  }

  .payNone{
    display: none;
  }

  .buttonPay{
    z-index: 1;
    width: 80%;
  }

  .paypal{
    z-index: 1;
    display: flex;
    width: 100%;
    list-style: none ;
    justify-content: center;
    margin-top:20px;

  }

  h2 {
    font-size: 22px;
    margin: 3%;
  }

  .check{

    color: ${colors[0].principal};
    font-weight: bold;
  }

  .list-group-item{

    display: flex;
    justify-content: space-between;
  }

  #cardSelect {
    padding-top: 10px;
  }

  .selectH2 {
    margin-bottom: -2%;
  }

  .p {
    font-size: 18px;
    font-weight: 500;
    margin-left: 3%;
    color: #186d5d;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card {
    box-shadow: 0px 0px 5px 0px rgba(153, 151, 153, 1);
    margin: 5.4%;
    background-color: #F1F1F1;
  }

  .submit {
    width: 100%;
    height: 40px;
    background: ${colors[0].principal2};
    color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    border: none;
  }

  .form {
    width: 90%;
    padding: 10px;
    background-color: #F1F1F1;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(153, 151, 153, 1);
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
  .calendarElementDesktop {
    display: none;
  }
  .calendar {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  }

  #calendar {
    margin-top: 9%;
    margin-bottom: 1%;
    align-self: flex-start;
    margin-left: 5%;
    
  }
  .calendar h2 {
    color: ${colors[0].titles};
  }

  .rdrDateDisplayWrapper {
    background-color: white;
    cursor: default;
    display: none;
}
  .rdrCalendarWrapper {
    font-size: 12px;
    width: 100%;
    background-color:#F1F1F1;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(153, 151, 153, 1);
  
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

  .bookingDatail {
    height: 125vh;
    }

  @media (min-width: 768px) {
    h2 {
      margin-left: 5%;
    }

    .bookingDatail {
      height: 116vh;
    }

    #calendar {
      margin-top: 5%;
      margin-bottom: 1%;
    }

    .form {
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
    .calendarElementDesktop {
      display: none;
    }

    .rdrCalendarWrapper {
      font-size: 16px;
      width: 100%;
    }
  }
/* PROBANDO */
  @media (min-width: 815px) {
    .bookingDatail {
      height: 1000px;
    }
  }

  @media (min-width: 953px) {
    .bookingDatail {
      height: 1100px;
    }
  }

  @media (min-width: 1078px) {
    .bookingDatail {
      height: 1200px;
    }
  }

  @media (min-width: 1120px) {
    .bookingDatail {
      height: 1368px;
    }
  }
  /* --------------------*/

  @media (min-width: 1365px) {
    display: grid;
    grid-template-columns: 60% 40%;


    .selectH2{
      align-self: flex-start;
      margin-left: 5%;
      margin-top: 3%;
      margin-bottom: -4%;
    }
    h2 {
      font-size: 28px;
      margin: 1%;
      margin-bottom: 2%;
    }

    .titleForm{

      align-self: flex-start;
      margin-left: 5%;

    


    }

    #cardSelect {
      padding-top: 10px;
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
    .left {
      display: flex;
      flex-direction: column;
      height: 75rem;
      margin: 0;
    }
    .calendar {
    }
    .select {
     
      
    }
    .bookingDatail {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 6%;
      height: 130vh;
    }
    .calendarElement {
      display: none;
    }
    .menuList {
      background-color: red;
    }

    .selectLabel {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .calendarElementDesktop {
      display: contents;
    }
    .rdrCalendarWrapper {
      font-size: 14px;
      width: 100%;
      border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(153, 151, 153, 1);
    }

    .submit{
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    
  }
`;
