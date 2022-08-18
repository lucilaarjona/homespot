import React, {useState, useEffect} from "react";
import CardCategory from "./CardCategory";
import {Categories, Cointaner, Section } from "./CardCategoryStyled";
import axios from "axios";

const Category = () => {
  
  const [categories, setCategories] = useState([]);

  const loadData = () => {
    axios.get("http://localhost:8080/categories")
    .then(res => {
      setCategories(res.data)
    })
  }

  useEffect(loadData,[])


  return (
    <Section>
      <div className="title">
        <h2>Buscar por categoría</h2>
      </div>
    <Cointaner>
      <div  className="categories">
        <Categories>
        {categories.map((categorie) => {
          return (
              <CardCategory
                key={categorie.id}
                img={categorie.urlImage}
                category={categorie.title}
                info={categorie.description}
              />
          );
        })}
        </Categories>
      </div>
    </Cointaner>
    </Section>

  );
};

export default Category;
