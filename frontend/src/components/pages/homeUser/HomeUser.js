import React from "react";
import { Searcher } from "../../Searcher/Searcher";
import Category from "../../Category/Categories";
import ProductList from "../../products/ProductList";
import { HeaderStyled } from "../../Header/HeaderStyled";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { SectionHome } from "../home/Styles";
import logo from '../../assets/logo 1.png'
import HeaderUser from '../../headerUser/HeaderUser'

const Home = ({user}) => {
  const navigate = useNavigate();
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
