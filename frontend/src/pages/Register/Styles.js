import styled from "styled-components";
import colors from '../../components/colors.json'

export const RegisterStyled = styled.div`
section{
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: auto;
gap: 20px;
margin-top: 80px;
}
form{
  display: flex;
  flex-direction: column;
  gap:15px;
  align-items:center;
}

.icons{
  position: absolute;
  margin-top:17px;
  margin-left: 270px;
  color: ${colors[0].principal};
}
.iconsName{
  position: absolute;
  margin-top:17px;
  margin-left: 270px;
  color: ${colors[0].principal};
}

form input {
width:300px;
height: 45px;
background: none;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top:5px;
border: 3px solid transparent;

  &:focus{
    border: 1px solid ${colors[0].principal};
    outline: none;

  }
}
.title{
color:${colors[0].principal};
font-weight: 700;
font-size: 24px;
line-height: 28px;
}
.label{
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: ${colors[0].principal};
}
.error{
color: red;
}
section button {
background: ${colors[0].principal};
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
border-radius: 5px;
height: 40px;
width: 206px;
left: 0px;
top: 0px;
border-radius: 5px;
color: white;
margin-bottom:-35px;
border: 1px solid white;
}

.logIn{
  cursor: default;
  color:black;
  margin-top:20px;
}
.logIn a {
  font-size: 18px;
  cursor: pointer;
  color:${colors[0].principal};
  text-decoration: none;

}
.logIn a:hover {
  font-size: 18px;
  cursor: pointer;
  color:rgba(90,97,189,1);

}

.userName{
  display: flex;
  flex-direction: column;
  gap: 15px;
}




@media (min-width: 1365px){

.icons{
  position: absolute;
  margin-top:17px;
  margin-left: 415px;
  color: ${colors[0].principal};
}
.iconsName{
  position: absolute;
  margin-top:17px;
  margin-left: 179px;
  color: ${colors[0].principal};
}
.userName{
  display: flex;
  flex-direction: row;
  gap:35px;
}

.userName input{
  width:208px
}
form input{
  width: 448px;
}
}
@media (min-width: 1370px){

.userName{
  display: flex;
  flex-direction: row;
}

.userName input{
  width:208px
}
form input{
  width: 448px;
}
}


`