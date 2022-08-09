import styled from "styled-components";

export const CardStyled = styled.div`

  max-width: 370px;
  
 
  .accordion {
    width: auto;
    
    
    
  }
  .accordionExample {
   
  }

  .accordion-item {
    
    -webkit-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    -moz-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    border-radius: 1rem;
    padding: 0.7%;
    
  
  }

  img {
    width: 355px;
    height: 220px;
    padding-right: 2%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    cursor: pointer;
  }

p{
  cursor:default;
}

  h2{
   
    width: 360px;
    cursor: pointer;

  }

  @media screen and (min-width: 641px)  {}

  @media screen and (min-width: 1365px) {

    max-width: 340px;



    img {
    max-width: 326px;
    height: 220px;
    padding-right: 2%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    cursor: pointer;
  }
  
  
 
  .accordion {
    width: auto;
    
    
    
  }
  .accordionExample {
   
  }

  .accordion-item {
    
    -webkit-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    -moz-box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    box-shadow: 0px 0px 8px -2px rgba(192, 192, 194, 1);
    border-radius: 1rem;
    padding: 0.7%;
    
  
  }
  .accordion-item:hover{
  cursor: pointer;
}
.accordion-item:before {
    content: '';
    background: rgba(237, 235, 234 ) ;
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
.accordion-item:active {
    color: #000
}
.accordion-item:active:after {
    background: transparent;
}
.accordion-item:hover:before {
    opacity: 1;
}

.accordion-item:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

  img {
    width: 402px;
    height: 220px;
    padding-right: 2%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }


  h2{
   
    max-width: 325px;

  }
  
  }

 

  
`;

export const Cointaner = styled.div`
display: grid;
justify-content: center;

`
export const Categories = styled.section`
margin-bottom:20px;
display: grid;
grid-template-columns: auto;
gap:10px;
@media screen and (min-width: 768px)  {
    display: grid;
    grid-template-columns: auto auto;
    gap:10px
}

@media screen and (min-width: 1365px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap:10px
}
`