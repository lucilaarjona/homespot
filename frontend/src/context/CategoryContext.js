import React, { useState } from "react";
import { createContext } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categorieSelected, setCategorieSelected] = useState("");
  return (
    <>
      <CategoryContext.Provider
        value={{ categorieSelected, setCategorieSelected }}
      >
        {children}
      </CategoryContext.Provider>
    </>
  );
};

export { CategoryProvider };

export default CategoryProvider;
