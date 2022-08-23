import styled from "styled-components";

const colors = {
  button: "#fe8700",
}
export const RegisterStyled = styled.div`
section{
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: auto;
gap: 50px;
margin-top: 80px;
}
form{
  display: flex;
  flex-direction: column;
  gap:40px;
  align-items:center;
}

.icons{
  position: absolute;
  margin-top:17px;
  margin-left: 270px;
  color: ${colors.button};
}
.iconsName{
  position: absolute;
  margin-top:17px;
  margin-left: 270px;
  color: ${colors.button};
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
    border: 1px solid ${colors.button};
    outline: none;

  }
}
.title{
color:#fe8700;
font-weight: 700;
font-size: 24px;
line-height: 28px;
}
.label{
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #fe8700;
}
.error{
color: red;
}
section button {
background: #fe8700;
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
}
.logIn a {
  font-size: 18px;
  cursor: pointer;
  color:#fe8700;
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
  gap: 40px;
}
Header{
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
}

Footer{
  position:sticky;
  bottom: 0;
}

@media (min-width: 768px){
  Footer{
  position:absolute;
  bottom: 0;
}
}


@media (min-width: 1365px){
  Footer{
  position:sticky;
  bottom: 0;
}
.icons{
  position: absolute;
  margin-top:17px;
  margin-left: 415px;
  color: ${colors.button};
}
.iconsName{
  position: absolute;
  margin-top:17px;
  margin-left: 179px;
  color: ${colors.button};
}
.userName{
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.userName input{
  width:208px
}
form input{
  width: 448px;
}
}
@media (min-width: 1370px){
  Footer{
  position:absolute;
  bottom: 0;
}
.userName{
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.userName input{
  width:208px
}
form input{
  width: 448px;
}
}


`