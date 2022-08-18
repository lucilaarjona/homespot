import React from "react";
import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled } from "./ProductStyled";
import axios from "axios";

import { useEffect, useState } from "react";



const ProductList = () => {
  const [product, setProduct] = useState(Products);

  const LoadProduct = () => {
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProduct(response.data)
      })
  }

  useEffect(LoadProduct, [])

  return (
    <ProductStyled>
      <section className="productList">
        {Products.map((product, index) => {
          return (
            <Product
              key={index}
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