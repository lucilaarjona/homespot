import React from "react";
import { CardStyled } from "./CardCategoryStyled";


const CardCategory = ({img, category, info, handlerFilter, num}) => {
  
 

  return (
    <>
      <CardStyled >

       
          <div className="accordion-item" >
          
              <div
                onClick={() => {
                  handlerFilter(num)
                }}
              
             
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-toggle="collapse"
               
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <img src={img} alt={category} />
              </div>
              {/* <div className="label">
                <h2>{category}</h2>
                <p>{info}</p>
              </div>
               */}
            
            <div
             
             data-bs-target="#collapseOne"
             aria-expanded="true"
            
           >
             <div onClick={() => {
                  handlerFilter(num)
                }} className="label">
               <h2>{category}</h2>
               <p>{info}</p>
             </div>
          </div>
          </div>
       

      
      </CardStyled>


      </>
      
  );
};

export default CardCategory;
