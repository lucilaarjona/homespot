import React, { useEffect, useState } from "react";
import { createContext } from "react"
import axiosHelper from "../helper/axiosHelper";


export const ProductContext = createContext();



const ProductProvider = ({children}) => {


    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState("")
    const [errorLogIn, setErrorLogIn] = useState(false)



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
        value={{ products, setProducts, productId, setProductId, errorLogIn, setErrorLogIn }}
      >
        {children}
      </ProductContext.Provider>
    </>)
}



export default ProductProvider