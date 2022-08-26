import React, {useEffect} from "react";
import { Searcher } from "../../components/Searcher";
import Category from "../../components/Category";
import ProductList from "../../components/products";

const Home = () => {
  useEffect(()=>{
    document.title = `HomeSpot`
  })
  return (
    <>
      <Searcher />
      <Category />
      <ProductList />
    </>
  );
};

export default Home;
