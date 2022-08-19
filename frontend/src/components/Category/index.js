import React from "react";
import CardCategory from "./CardCategory";
import listCategory from "./listCategory.json";
import {Categories, Cointaner, Section } from "./CardCategoryStyled";

const Category = ({handlerFilter}) => {
  return (
    <Section>
      <div className="title">
        <h2>Buscar por categoría</h2>
      </div>
    <Cointaner>
      <div  className="categories">
        <Categories>
        {listCategory.map((element, index) => {
          return (
            <div key={element.id} >
           
              <CardCategory
              handlerFilter={handlerFilter}
              num={index}
              img={element.img}
              category={element.category}
              info={element.info}
              />

           </div>
            
          );
        })
        
        }
        </Categories>
      </div>
    </Cointaner>
    </Section>

  );
};

export default Category;
