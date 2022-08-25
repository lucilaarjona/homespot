import styled from "styled-components";

const colors = {
  botton: "#fe8700",
}



export const LogInStyled = styled.section`


section{
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: auto; 
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

.register{
  cursor: default;
  color:black;
}
.register a {
  font-size: 18px;
  cursor: pointer;
  color:#fe8700;

}
.register a:hover {
  font-size: 18px;
  cursor: pointer;
  color:rgba(90,97,189,1);

}

Header{
  width: 100%;
  position: absolute;
}

Footer{
  position:absolute;
}

.error{
  display: none;
  color: red;

}

.icons{
  position: absolute;
  margin-top:17px;
  margin-left: -30px;
  color: ${colors.button};
}

`