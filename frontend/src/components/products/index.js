import React, { useContext, useEffect, useState } from "react";
import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled } from "./ProductStyled";
<<<<<<< HEAD
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
=======
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
>>>>>>> ebf20dcd0432e37cec3847cfb575665fcc05524b

  return (
    <ProductStyled>
      <section className="productList">
        {productsFilter.map((product, index) => {
          return (
            <Product
              key={index}
<<<<<<< HEAD
=======
              id = {product.id}
>>>>>>> ebf20dcd0432e37cec3847cfb575665fcc05524b
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