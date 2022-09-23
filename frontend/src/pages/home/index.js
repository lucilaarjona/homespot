import React, {useEffect} from "react";
import { Searcher } from "../../components/Searcher";
import Category from "../../components/Category";
import ProductList from "../../components/products";

const Home = () => {
  useEffect(()=>{
    document.title = `HomeSpot`
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <Searcher />
      <Category />
      <ProductList />
    </>
  );
};

export default Home;
