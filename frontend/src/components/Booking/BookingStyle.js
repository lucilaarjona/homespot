import styled from "styled-components";

export const BookingStyle = styled.section`

    @media (min-width: 1365px) {
        display: grid;
        grid-template-columns: 70% 30%;
        height:1000px;
        margin-left: 20px;
        margin-top: 50px;

        .form{
            display: grid;
            grid-template-columns: 41% 41%;
            grid-template-rows: 24% 24%;
            padding-top: 6%;
            gap: 20%;
            column-gap: 5%;
            justify-content: center;
            background-color: pink;
            width: 90%;
            height: 30%;
        }
        input{
            border-radius: 5px;
        }
        .label{
            display:flex;
            flex-direction: column;
        }
    }

`