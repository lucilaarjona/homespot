import React, { useEffect, useState } from "react";
import { createContext } from "react"
import axiosHelper from "../helper/axiosHelper";
import { addDays } from "date-fns";



export const ProductContext = createContext();



const ProductProvider = ({children}) => {


    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState("")
    const [errorLogIn, setErrorLogIn] = useState(false)
    const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: "selection",
      },
    ]);



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
        value={{ range, setRange, products, setProducts, productId, setProductId, errorLogIn, setErrorLogIn }}
      >
        {children}
      </ProductContext.Provider>
    </>)
}



export default ProductProvider