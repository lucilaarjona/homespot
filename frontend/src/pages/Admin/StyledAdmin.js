import styled from "styled-components";
import colors from "../../components/colors.json";

export const HeaderAdminStyle = styled.header`
 header {
     
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;

     border-bottom: 3px solid ${colors[0].principal};
   }
 
   .title {
    
     margin-top: 10px;
     margin-left: 20px;
     color: ${colors[0].principal};
   }

   .title #name {
    font-weight: bold;
    margin-top: -7px;
    font-size: 22px;
  }
  .back {
    margin-top: 10px;
    margin-right: 20px;
  }

  .iconBack {
    font-size: 35px;
    color: ${colors[0].principal};
  }


  @media (min-width: 768px) {

.title #name {

font-size: 27px;
}




.iconBack {
font-size: 40px;

}
}


@media (min-width: 1365px) {

.title #name {

font-size: 35px;
}




.iconBack {
font-size: 40px;

}
}

`

export const FormAdmi = styled.form``