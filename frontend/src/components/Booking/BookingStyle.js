import styled from "styled-components";

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
  }

  @media (min-width: 1365px) {
    /* display: grid;
    grid-template-columns: 70% 30%;
    height: 1000px;
    margin-left: 20px;
    margin-top: 50px; */

    display: grid;
    grid-template-columns: 70% 30%;

    h2 {
      font-size: 30px;
      margin: 1%;
      margin-bottom: 2%;
    }

    .form {
      /* order:1; */
      /* display: grid;
      grid-template-columns: 41% 41%;
      grid-template-rows: 24% 24%;
      padding-top: 6%;
      gap: 20%;
      column-gap: 5%;
      justify-content: center;
      width: 90%;
      height: 30%;
      margin: 0%; */

      grid-template-columns: 44% 44%;

      width: 70rem;
      margin: 1%;
      height: 18rem;
      row-gap: 18%;
      order: 1;
    }
    input {
      padding: 0.8rem;
    }
    .label {
      font-size: 19px;
      margin-top: 8%;
    }

    .container{
        order: 3;
       

    }

   
    .calendar {
      
       
    }

    .select {
      
      
    }

   

    .bookingDatail {
        order: 2;
       
    }
  }
`;
