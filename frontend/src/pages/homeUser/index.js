import React from "react";
import HeaderUser from '../../components/headerUser'
import {Searcher} from "../../components/Searcher"
import Category from "../../components/Category"
import ProductList from '../../components/products'



const Home = ({user}) => {
  return (
  
    <>
      <HeaderUser user={user}/>
      <Searcher />
      <Category />
      <ProductList />
    

      </>
   
  );
};

export default Home;
