import React from "react";
import { useEffect, useState, useContext } from "react";
import CardCategory from "./CardCategory";
import { Categories, Cointaner, Section } from "./CardCategoryStyled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CityContext } from "../../context/CityContext";
import axiosHelper from "../../helper/axiosHelper";
import { CategoryContext } from "../../context/CategoryContext";

const Category = ({ handlerFilter }) => {
  const [categories, setCategories] = useState([]);
  const { setCategorieSelected } = useContext(CategoryContext);
  const { setCitySelected } = useContext(CityContext);

  const loadData = () => {
    axiosHelper.get("/category").then((res) => {
      setCategories(res.data);
    });
  };
  useEffect(loadData, []);
  return (
    <Section>
      <div className="title">
        <h4 className="titlePrincipal">Buscar por categoría</h4>{" "}
        <button
          onClick={() => {
            setCitySelected("") && setCategorieSelected("");
          }}
          className="showAll"
        >
          {" "}
          <h4> Ver todo </h4>
          <VisibilityIcon className="iconSee" />
        </button>
      </div>
      {categories.length > 0 ? (
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
      ) : (
        <div>Cargando categorias......</div>
      )}
    </Section>
  );
};

export default Category;
