import styled from "styled-components";
import colors from "../../components/colors.json"



export const LogInStyled = styled.section`



section{
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
height: 400px;
margin-top: 50%;
justify-content:center;
align-items:center;
margin-left:25%;
}
form{
  display: flex;
  flex-direction: column;
  gap:20px;
  align-items:center;
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

.register{
  cursor: default;
  color:black;
  margin-top: 20px;
}
.register a {
  font-size: 18px;
  cursor: pointer;
  color:${colors[0].principal};
  text-decoration: none;

}
.register a:hover {
  font-size: 18px;
  cursor: pointer;
  color:rgba(90,97,189,1);

}



.error{
  display: none;
  color: red;

}

.icons{
  position: absolute;
  margin-top:17px;
  margin-left: -30px;
  color: ${colors[0].principal};
}
@media (min-width:768px){
  section{
margin-top: 40%;
border-radius: 10%;
}
}

@media (min-width: 1365px){
  section{
margin-top: 10%;
width: 30%;
margin-left:35%;
}
}
`