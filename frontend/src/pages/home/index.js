import React from "react";
import { Searcher } from "../../components/Searcher";
import Category from "../../components/Category";
import ProductList from "../../components/products";

const Home = () => {
  return (
    <>
      <Searcher />
      <Category />
      <ProductList />
    </>
  );
};

export default Home;
