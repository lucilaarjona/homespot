import React from "react";
import { SectionHome } from "../home/Styles";
import HeaderUser from '../../components/headerUser'
import {Searcher} from "../../components/Searcher"
import Category from "../../components/Category"
import ProductList from '../../components/products'
import Footer from '../../components/Footer'


const Home = ({user}) => {
  return (
    <SectionHome>
      <HeaderUser user={user}/>
      <Searcher />
      <Category />
      <ProductList />
      <Footer />
    </SectionHome>
  );
};

export default Home;
