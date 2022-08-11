import styled from 'styled-components';

export const SearcherStyled = styled.div`
     section{
    display: flex;
    width: 100%;
    height: 263px;
    margin: 0px 0px;
    background: rgb(2,0,36);
    background: linear-gradient(21deg, rgba(2,0,36,1) 0%, rgba(90,97,189,1) 58%, rgba(0,11,85,1) 98%);
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
     }

    form{
    display: flex;
    flex-direction: column;
    gap: 11px;
    position: absolute;
    margin-top:120px;
    }

   input{
      &:focus{
    border: 1px solid white;
    outline: none;
  }
    }
    
    h1{
    color:White;
    font-size: 23px;
    font-weight: 700;
    line-height: 42.19px;
    text-align: center;
     }
     .location{
     width: 345px;
     height: 36px;
     color: Black;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     border-radius: 5px;
  }
  .icon{
     color: #607D8B;
     margin-right: 5px;
  }

  .selectLabel{
     color: #607D8B;
     font-weight: normal;
     font-size: 16px;
     font-weight: 500;
     margin-left: 0px;
  }

  .selectLocation{
     display: flex;
     flex-direction: row;
     gap: 10px;
     align-items: center;
     box-sizing: border-box;
     border: 1px solid #F3F1ED;
     box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
     border-radius: 0px 0px 5px 5px

  }
  .cities{
     display: flex;
     flex-direction: column;
     font-size: 13px;
     font-weight: bold;
  }
  .country{
     font-weight: lighter;
     font-size: 11px;
  }

  .search{
     background: rgb(255,156,80);
     background: linear-gradient(0deg, rgba(255,156,80,1) 28%, rgba(254,135,0,1) 100%);
     color: white;
     border: none;
     font-weight: 500;
     border-radius: 5px;
     width: 345px;
     height: 40px;
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }

  @media(min-width:1365px ){
     section{
    display: flex;
    width: 100%;
    height: 151px;
    margin: 0px 0px;
    background: rgb(2,0,36);
    background: linear-gradient(21deg, rgba(2,0,36,1) 0%, rgba(90,97,189,1) 58%, rgba(0,11,85,1) 98%);
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
  }

  h1{
    color:White;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.19px;
  }
  form{
    display: flex;
    flex-direction: row;
    gap: 30px;
    position: absolute;
    margin-top:90px;
  }
  .location{
     width: 422px;
     height: 40px;
     color: Black;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     border-radius: 5px;
  }
  .icon{
     color: #607D8B;
     margin-right: 5px;
  }

  .selectLabel{
     color: #607D8B;
     font-weight: normal;
     font-size: 16px;
     font-weight: 500;
     margin-left: 0px;
  }

  .selectLocation{
     display: flex;
     flex-direction: row;
     gap: 10px;
     align-items: center;
     box-sizing: border-box;
     border: 1px solid #F3F1ED;
     box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
     border-radius: 0px 0px 5px 5px

  }
  .cities{
     display: flex;
     flex-direction: column;
     font-size: 13px;
     font-weight: bold;
  }
  .country{
     font-weight: lighter;
     font-size: 11px;
  }

  .search{
     background: rgb(255,156,80);
     background: linear-gradient(0deg, rgba(255,156,80,1) 28%, rgba(254,135,0,1) 100%);
     color: white;
     border: none;
     border-radius: 5px;
     width: 206px;
     height: 40px;
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }

  .search:hover{
  color:white;
  border:1px solid white;
  box-shadow: 0 0 0px rgb(255,156,80),
                0 0 5px rgb(255,156,80),
                0 0 5px rgb(255,156,80);
                background: rgb(255,156,80);
background: linear-gradient(0deg, rgba(255,156,80,1) 28%, rgba(254,135,0,1) 100%);
  
  }}
  @media(min-width:768px ){
     section{
    display: flex;
    width: 100%;
    height: 138px;
    margin: 0px 0px;
    background: red;
    background: rgb(2,0,36);
    background: linear-gradient(21deg, rgba(2,0,36,1) 0%, rgba(90,97,189,1) 58%, rgba(0,11,85,1) 98%);
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
  }

  h1{
    color:White;
    font-size: 25px;
    font-weight: 700;
    line-height: 42.19px;
  }
  form{
    display: flex;
    flex-direction: row;
    gap: 10px;
    position: absolute;
    margin-top:80px;
  }
  .location{
     width: 250px;
     height: 40px;
     color: Black;
     box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
     border-radius: 5px;
  }
  .icon{
     color: #607D8B;
     margin-right: 5px;
  }

  .selectLabel{
     color: #607D8B;
     font-weight: normal;
     font-size: 16px;
     font-weight: 500;
     margin-left: 0px;
  }

  .selectLocation{
     display: flex;
     flex-direction: row;
     gap: 10px;
     align-items: center;
     box-sizing: border-box;
     border: 1px solid #F3F1ED;
     box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
     border-radius: 0px 0px 5px 5px

  }
  .cities{
     display: flex;
     flex-direction: column;
     font-size: 13px;
     font-weight: bold;
  }
  .country{
     font-weight: lighter;
     font-size: 11px;
  }

  .search{
     background: rgb(255,156,80);
     background: linear-gradient(0deg, rgba(255,156,80,1) 28%, rgba(254,135,0,1) 100%);
     color: white;
     border: none;
     border-radius: 5px;
     width: 100px;
     height: 40px;
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }

  .css-1s2u09g-control:hover{
  color:white;
  border:1px solid white;
  box-shadow: 0 0 0px rgb(255,156,80),
                0 0 5px rgb(255,156,80),
                0 0 5px rgb(255,156,80);
  background: white ;
  background: linear-gradient(149deg, #EFE4E4 0%,#EFE4E4  100%);
}
.css-1s2u09g-control:hover polyline{
    stroke-dashoffset: -460;
}

    
  }

  @media(min-width:1365px ){
   h1{
      font-size: 34px;

   }
  }
`