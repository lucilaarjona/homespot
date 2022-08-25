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
        (product) => product.category.title === categorieSelected
      );
      setProductsFilter(getFilterByCategory);
    }
  }, [categorieSelected]);

  const [products, setProducts] = useState([])
  const loadData = () => {
    axios.get("http://localhost:8080/product")
      .then(res => {
        setProducts(res.data)
      })
  };

  useEffect(loadData,[])

  useEffect(()=>{
    if (categorieSelected === "") {
      setProductsFilter(products.sort(()=>Math.random()- 0.5));
    }},[products])

  return (
    <ProductStyled>
    {!categorieSelected ? (<> <h1 className="titleSection">Nuestras recomendaciones para ti</h1> </> ): null}
      <section className="productList">
        {productsFilter.map((product, index) => {
          return (
            <Product
              key={index}
              id = {product.id}
              crimg={product.images[0].url}
              category={product.category.title}
              title={product.name}
              location={`${product.city.name},${product.city.country}`}
              description={product.description}
              ac = {product.features.ac}
              gym = {product.features.gym}
              pool = {product.features.pool}
              grill = {product.features.grill}
              pets = {product.features.pets}
              laundry = {product.features.laundry}
              heating = {product.features.heating}
              wifi = {product.features.wifi}

            />
          );
        })}
      </section>
    </ProductStyled>
  );
};

export default ProductList;
