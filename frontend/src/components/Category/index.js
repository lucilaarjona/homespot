import React from "react";
import { useEffect,useState } from "react";
import CardCategory from "./CardCategory";
import { Categories, Cointaner, Section } from "./CardCategoryStyled";
import axios from "axios";

const Category = ({ handlerFilter }) => {
  const [categories, setCategories] = useState([])
  const loadData = () => {
    axios.get("http://18.118.83.144:8080/categories")
      .then(res => {
        setCategories(res.data)
      })
  };

  useEffect(loadData,[])




  return (
    <Section>
      <div className="title">
        <h2>Buscar por categoría</h2>
      </div>
      <Cointaner>
        <div className="categories">
          <Categories>
            {categories.map((element, index) => {
              return (
                <div key={element.id}>
                  <CardCategory
                    handlerFilter={handlerFilter}
                    categoryName={element.title}
                    img={element.urlImage}
                    category={element.title}
                    info={element.description}
                  />
                </div>
              );
            })}
          </Categories>
        </div>
      </Cointaner>
    </Section>
  );
};

export default Category;
