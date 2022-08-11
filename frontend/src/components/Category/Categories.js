import React from "react";
import CardCategory from "./CardCategory";
import listCategory from "./listCategory.json";
import {Categories, Cointaner } from "./CardCategoryStyled";

const Category = ({list}) => {
  return (
    <Cointaner>
        <div className="title">
        <h2>Buscar por categoría</h2>
        </div>
      <div  className="categories">
        <Categories>
        {listCategory.map((element) => {
          return (
           
              <CardCategory
                key={element.id}
                img={element.img}
                category={element.category}
                info={element.info}
              />
            
          );
        })}
        </Categories>
      </div>
    </Cointaner>
  );
};

export default Category;
