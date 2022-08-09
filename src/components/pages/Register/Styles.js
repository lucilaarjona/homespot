import styled from "styled-components";

export const RegisterStyled = styled.div`
section{
display: flex;
flex-direction: column;
align-items: center;
width: auto;
heigth: auto;
gap: 50px;
margin-top: 150px;
}
form{
  display: flex;
  flex-direction: column;
  gap:40px;
  align-items:center;
}

form input {
width:300px;
height: 45px;
background: #FFFFFF;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top:5px;
}
.title{
color:rgb(34,195,155);
font-weight: 700;
font-size: 24px;
line-height: 28px;
}
.label{
font-weight: 500;
font-size: 12px;
line-height: 14px;
}

section button {
background: rgb(34,195,155);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
border-radius: 5px;
height: 40px;
width: 206px;
left: 0px;
top: 0px;
border-radius: 5px;
color: white;
margin-bottom:-35px
}

.logIn{
  cursor: default;
  color:black;
}
.logIn a {
  font-size: 18px;
  cursor: pointer;
  color:rgb(34,195,155);
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
  position: absolute;
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