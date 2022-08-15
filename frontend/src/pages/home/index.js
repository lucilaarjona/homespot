import React from 'react'
import {Searcher} from "../../components/Searcher"
import Category from "../../components/Category"
import ProductList from '../../components/products'
import Header from "../../components/Header"
import Footer from '../../components/Footer'
import { SectionHome } from './Styles'


const Home = () => {
  return (
    <SectionHome>
        <Header/>
        <Searcher/>
        <Category/>
        <ProductList/>
        <Footer/>
    </SectionHome>
  )
}

export default Home