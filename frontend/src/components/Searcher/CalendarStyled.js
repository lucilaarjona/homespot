import styled from "styled-components";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export const CalendarStyled = styled.div`
  .inputBox{
     background-color:#FFFFFF;
     color:#607D8B;
     border:none;
     font-size: 14px;
     font-weight: 500;
     border-radius: 5px;
     border-color: none;
     width: 340px;
     height: 36px;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     text-align: center;
     position: relative;
     cursor:pointer;
  }
  .inputBox:hover{
  color:white;
  border:1px solid white;
  box-shadow: 0 0 0px rgb(34,195,155),
                0 0 5px rgb(34,195,155),
                0 0 5px rgb(34,195,155);
  background: white ;
  background: linear-gradient(149deg, #EFE4E4 0%,#EFE4E4  100%);
}
.inputBox:hover polyline{
    stroke-dashoffset: -460;
}

  .rdrDateDisplay{
    color: rgb(34,195,155) !important;
  }
  .rdrDayStartPreview{
    color: rgb(34,195,155) !important;
  }
  .rdrStartEdge{
    color: rgb(34,195,155) !important;
  }
  .rdrEndEdge{
    color: rgb(34,195,155) !important;
  }
  .rdrInRange{
    color: rgb(34,195,155) !important;
  }
  .rdrDayEndPreview{
    color: rgb(34,195,155) !important;
  }
  .rdrDayNumber{
    color: rgb(34,195,155) !important;
  }
  .rdrDayStartWeek{
    color: rgb(34,195,155) !important;
  }
  .rdrDayEndWeek{
    color: rgb(34,195,155) !important;
  }
  .rdrDayWeekend{
    color: rgb(34,195,155) !important;
  }
  .rdrDay{
    color: rgb(34,195,155) !important;
  }
  .rdrDay
  .rdrDayToday{
    color: rgb(34,195,155) !important;
  }
  .rdrDayNumber{
    color: rgb(34,195,155) !important;
  }
  .rdrDayHovered{
    color: rgb(34,195,155) !important;
  }
  .rdrDayActive{
    color: rgb(34,195,155) !important;
  }
  span .rdrDayNumber{
    color: rgb(34,195,155) !important;
  }
.rdrDateDisplayWrapper{
  width: 340px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  }


.rdrMonthAndYearWrapper{
  width: 340px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgb(34,195,155) !important;
}
.rdrMonthPicker{
  color: rgb(34,195,155) !important;
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  border-radius: 5px 5px 5px 5px;
}
.rdrYearPicker{
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  width: 100px;
  justify-content: center;
  border-radius: 5px 5px 5px 5px;
}

.rdrMonthAndYearWrapper{
  width: 340px;
  border-bottom:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white  !important;
}
.rdrMonth{
  width: 340px;
  border:none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white !important;
}

@media(min-width:376px ){
  .inputBox{
      background-color:#FFFFFF;
     color:#607D8B;
     border:none;
     font-size: 14px;
     font-weight: 500;
     border-radius: 5px;
     border-color: none;
     width: 345px;
     margin-rigth: 20px;
     height: 36px;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     text-align: center;
     position: relative;
  }
  .rdrDateDisplayWrapper{
  width: 340px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: red !important;
}
.rdrMonthAndYearWrapper{
  width: 340px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: blue !important;
}
.rdrMonthPicker{
  color: rgb(34,195,155) !important;
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  border-radius: 5px 5px 5px 5px;
}
.rdrYearPicker{
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  width: 100px;
  justify-content: center;
  border-radius: 5px 5px 5px 5px;
}
.rdrMonthAndYearWrapper{
  width: 342px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white !important;
}
.rdrMonth{
  width: 340px;
  height: 223px;
  border: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white !important;
}
}
@media(min-width:768px ){
  .inputBox{
      background-color:#FFFFFF;
     color:#607D8B;
     border:none;
     font-size: 14px;
     font-weight: 500;
     border-radius: 5px;
     border-color: none;
     width: 250px;
     margin-rigth: 20px;
     height: 36px;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     text-align: center;
     position: 375;
  }
  .rdrDateDisplayWrapper{
  width: 250px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white !important;
}
.rdrMonthAndYearWrapper{
  width: 250px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white !important;
}
.rdrMonthPicker{
  color: rgb(34,195,155) !important;
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  border-radius: 5px 5px 5px 5px;
  width: 70px;
}
.rdrYearPicker{
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  width: 70px;
  justify-content: center;
  border-radius: 5px 5px 5px 5px;
}

.rdrMonthAndYearWrapper{
  width: 250px;
  border:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white !important;
}
.rdrMonth{
  width: 250px;
  height: 252px;
  border: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white !important;
},
.rdrMonths {
    display: flex;
    width: 250px;
    z-index:1;
}
}

`