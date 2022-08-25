import React, { useContext, useEffect, useState } from "react";
import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled } from "./ProductStyled";
import { CategoryContext } from "../../context/CategoryContext";

const ProductList = () => {
  const { categorieSelected } = useContext(CategoryContext);
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    if (categorieSelected === "") {
      setProductsFilter(Products);
    } else {
      const getFilterByCategory = Products.filter(
        (product) => product.category === categorieSelected
      );
      setProductsFilter(getFilterByCategory);
    }
  }, [categorieSelected]);

  return (
    <ProductStyled>
      <section className="productList">
        {productsFilter.map((product, index) => {
          return (
            <Product
              key={index}
              id = {product.id}
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


//const baseURL = `http://localhost:8080/products`

//async function getProduct() {
// try {
//  const response = axios({
//  url: `${baseURL}/products`,
//     method: 'GET'
//   })
//   return response
// } catch (error) {

//}

//}


//useEffect(() => {
  // async function LoadProduct() {
  //   const response = await getProduct();
  //    return response
  //   }
  //   LoadProduct()
  // })