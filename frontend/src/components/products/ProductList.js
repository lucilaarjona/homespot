import React, { useState } from "react";
import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled } from "./ProductStyled";

const ProductList = () => {
  const [product, setProduct] = useState(Products);
  return (
    <ProductStyled>
      <section className="productList">
        {Products.map((product, index) => {
          return (
            <Product
              key = {index}
              crimg={product.crimg}
              category={product.category}
              title={product.title}
              location={product.location}
              description={product.description}
            />
          );
        })}
      </section>
    </ProductStyled>
  );
};

export default ProductList;
