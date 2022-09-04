import React, { useEffect, useState } from "react";
import { createContext } from "react"
import axiosHelper from "../helper/axiosHelper";


export const ProductContext = createContext();



const ProductProvider = ({children}) => {


    const [products, setProducts] = useState([]);



    const loadData = () => {
        axiosHelper.get(`/product`)
          .then(res => {
            setProducts(res.data)
          })
      };
    
      useEffect(loadData,[])

  return (
    <>
      <ProductContext.Provider
        value={{ products, setProducts }}
      >
        {children}
      </ProductContext.Provider>
    </>)
}



export default ProductProvider