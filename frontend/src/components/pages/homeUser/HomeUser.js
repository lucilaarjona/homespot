import React from 'react'
import {Searcher} from "../../Searcher/Searcher"
import Category from "../../Category/Categories"
import ProductList from '../../products/ProductList'
import Header from "../../Header/Header"
import Footer from '../../Footer/Footer'
import { SectionHome } from '../home/Styles'


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