import React, { useState } from "react";
import { CardStyled } from "./CardCategoryStyled";

const CardCategory = ({img, category, info}) => {
  const [isOpen, setIsOpen] = useState(false);

  const click = () => {
    if(setIsOpen === true){
      return setIsOpen === false
    }
  };

  return (
      <CardStyled >

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <div
                onClick={() => {
                  click();
                }}
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
              >
                <img src={img} alt={category} />
              </div>
            </h2>

            <div
              onClick={() => {
                click();
              }}
              data-bs-target="#collapseOne"
              aria-expanded="true"
              data-bs-toggle={isOpen ? "" : "collapse"}
            >
              <div>
                <h2>{category}</h2>
                <p>{info}</p>
              </div>
            </div>
          </div>
        </div>
      </CardStyled>
  );
};

export default CardCategory;
