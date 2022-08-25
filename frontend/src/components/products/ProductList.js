import React, {  useContext ,useEffect, useState } from "react";
// import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled } from "./ProductStyled";
import { CategoryContext } from "../../context/CategoryContext";
import axios from "axios";

const ProductList = () => {
  const { categorieSelected } = useContext(CategoryContext);
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    if (categorieSelected === "") {
      setProductsFilter(products);
    } else {
      const getFilterByCategory = products.filter(
        (product) => product.category === categorieSelected
      );
      setProductsFilter(getFilterByCategory);
    }
  }, [categorieSelected]);

  const [products, setProducts] = useState([])
  const loadData = () => {
    axios.get("http://localhost:8080/product%22")
      .then(res => {
        setProducts(res.data)
      })
  };

  useEffect(loadData,[])

  useEffect(()=>{
    if (categorieSelected === "") {
      setProductsFilter(products);
    }},[products])

  return (
    <ProductStyled>
      <section className="productList">
        {productsFilter.map((product, index) => {
          return (
            <Product
              key={index}
              id = {product.id}
              crimg={product.images[1].url}
              category={product.category.title}
              title={product.name}
              location={product.city.name}
              description={product.description}
            />
          );
        })}
      </section>
    </ProductStyled>
  );
};

export default ProductList;