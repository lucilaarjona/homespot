import styled from "styled-components";
import colors from "../../components/colors.json";
export const ProductStyled = styled.section`
  width: 100%;

  #titlePolicie{
    margin-top: 4%;
    border-top: 2px solid #f1eded;

  }


  .styles-module_wrapper__1I_qj {
    z-index: 3;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
 
  input[type="radio"] {
    display: none;
  }
  .containerSlider {
    width: 100%;
    height: 950px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
  }

  .container {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
  .cards {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .card {
    position: absolute;
    width: 85%;
    height: 70%;
    left: 0;
    right: 0;
    border: none;
    margin: auto;
    cursor: pointer;
    transition: transform 0s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: none;
    border: none;
    object-fit: cover;
  }

  #item-2:checked ~ .cards #selector-1,
  #item-1:checked ~ .cards #selector-5,
  #item-3:checked ~ .cards #selector-2,
  #item-4:checked ~ .cards #selector-3,
  #item-5:checked ~ .cards #selector-4 {
    transform: translateX(-30%) scale(0.8);
    opacity: 0.6;
    z-index: 0;
  }

  #item-3:checked ~ .cards #selector-4,
  #item-1:checked ~ .cards #selector-2,
  #item-2:checked ~ .cards #selector-3,
  #item-5:checked ~ .cards #selector-1,
  #item-4:checked ~ .cards #selector-5 {
    transform: translateX(30%) scale(0.8);
    opacity: 0.6;
    z-index: 0;
  }

  #item-1:checked ~ .cards #selector-1,
  #item-2:checked ~ .cards #selector-2,
  #item-3:checked ~ .cards #selector-3,
  #item-4:checked ~ .cards #selector-4,
  #item-5:checked ~ .cards #selector-5 {
    transform: translateX(0) scale(1);
    z-index: 1;
  }
  .images {
    position: absolute;
    margin-top: 200px;
    width: 80px;
    height: 40px;
    background: none;
    border: none;
    border-radius: 10px;
    color: ${colors[0].principal};
  }

  .score {
    font-size: 15px;
    margin-right: 20px;
  }

  .description {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .descriptionTitle {
    border-bottom: 2px solid #f1eded;
    color: ${colors[0].titles};
    font-size: 35px;
  }

  .features {
    border-bottom: 2px solid #f1eded;
    color: ${colors[0].titles};
    font-size: 30px;
    margin-bottom: 15px;
  }
  li {
    list-style: none;
  }
  .featuresList {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
  }

  .featuresIcon {
    margin-left: -20px;
    color: ${colors[0].principal};
  }

  .reservation {
    border-top: 2px solid #f1eded;
    display: flex;
    width: 80%;
    margin-left: 10%;
    flex-direction: column;
    justify-content: center;
    height: 650px;
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
  .viewImages{
    z-index: 10;
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

  span .rdrYearPicker select {
    position: relative;
  }

  .startReservation{
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid ${colors[0].principal2};
    height: fit-content;
    width: 70%;
    align-items: center;
    border-radius: 10px;
    gap: 20px;
  }
  .startReservation button{
    width: 200px;
    border-radius: 5px;
    background-color: ${colors[0].principal2};
    border: none;
    color: white;
  }
  .startReservation button:hover{
    width: 200px;
   
    border-radius: 5px;
    background-color: white;
    border: 2px solid ${colors[0].principal2};
    color: ${colors[0].principal2};
    font-weight: bold;
  }
  .startReservation span{
    margin-left: 4%;
    color: ${colors[0].titles};
    font-weight: bold;
  }

  .policies{
    height: 860px;
    width: 80%;
    margin-left: 10%;
    border-top: 2px solid #f1eded;
    justify-content: center;
  }
  .policiesSection{
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
  }

  .titlePolicie{
    font-weight: bold;
    margin-top: 20px;
    font-size: 18px;
    
    
  }

  #boxPolicie{

    margin-bottom: 4.5rem;
  }

  .titlePolicie li{
    font-weight: normal;
    margin-top: 18px;
    font-size: 14px;
    margin-left: -35px;
  }

  .titlePolicie div{
    font-weight: normal;
    margin-top: 18px;
    font-size: 16px;
  }
.IconPolicie{
  margin-right: 10px;
}
@media (min-width: 768px) {
  .containerSlider {
    width: 100%;
    height: 890px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
  }
    .card {
    position: absolute;
    width: 70%;
    height: 85%;
    left: 0;
    right: 0;
    border: none;
    margin: auto;
    cursor: pointer;
    transition: transform 0s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .cards {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .description {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    height: fit-content;
  }
  .reservation {
    border-top: 2px solid #f1eded;
    display: flex;
    width: 80%;
    margin-left: 10%;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: 750px;
  }
  .startReservation{
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid ${colors[0].principal2};
    height: 15%;
    width: 70%;
    align-items: center;
    border-radius: 10px;
    gap: 20px;
  }

  .startReservation button{
    width: 400px;
   
  }
  .startReservation button:hover{
    width: 400px;
   
   
  }
  .calendarElementDesktop{
    display: none;
  }

  .rdrCalendarWrapper {
    font-size: 16px;
    width: 100%;
  }
  .policies{
    height: 720px;
    width: 80%;
    margin-left: 10%;
    border-top: 2px solid #f1eded;
    justify-content: center;
  }
  .policiesSection{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .policiesContainer{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .styles-module_slide__1zrfk {
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
}

.styles-module_image__2hdkJ {
    max-height: 100%;
    max-width: 100%;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    margin-top: 70%;
    margin-left: 30%;
}
.images {
    position: absolute;
    margin-top: 355px;
    width: 80px;
    height: 40px;
    background: none;
    border: none;
    border-radius: 10px;
    color: ${colors[0].principal};
  }
}

@media (min-width: 1365px) {

  #boxRules{

    margin-bottom: 18%;
  }
  .containerSlider {
    width: 100%;
    height: 680px;
    margin: auto;
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
  }

  .container {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }

  .card {
    position: absolute;
    width: 60%;
    height: 70%;
    left: 0;
    right: 0;
    border: none;
    margin: auto;
    cursor: pointer;
    transition: transform 0s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .reservation {
    border-top: 2px solid #f1eded;
    display: grid;
    width: 80%;
    margin-left: 10%;
    grid-template-columns: 60% 40%;
    justify-content: center;
    height: 520px;
  }

  .startReservation{
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid ${colors[0].principal2};
    height: 22%;
    width: 70%;
    align-items: center;
    margin-left: 15%;
    border-radius: 10px;
    gap: 20px;
  }

  .startReservation button{
    width: 250px;
   
  }

  .startReservation button:hover{
    width: 260px;
   
   
  }

  .calendarElement{
    display: none;
  }

  .calendarElementDesktop{
    display: contents;
  }
  .rdrCalendarWrapper {
    font-size: 14px;
    width: 100%;
  }
  .policies{
    height: 420px;
    width: 80%;
    margin-left: 10%;
    border-top: 2px solid #f1eded;
    justify-content: center;
  }
  .policiesSection{
    display: grid;
    grid-template-columns: 30% 30% 33%;
    justify-content: center;
  }
  .policiesContainer{
    display: flex;
    flex-direction: column;
  }
  .styles-module_slide__1zrfk {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.styles-module_image__2hdkJ {
    max-height: 100%;
    max-width: 100%;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    margin: auto;
}


.rdrDateDisplayWrapper {
    background-color: white;
    cursor: default;
    display: none;
}
}
`;
