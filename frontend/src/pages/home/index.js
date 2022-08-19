import React, { useState } from 'react'
import {Searcher} from "../../components/Searcher"
import Category from "../../components/Category"
import ProductList from '../../components/products'
import Products from "../../components/products/Products.json"
import Product from '../../components/products/Product'
import { ProductStyled } from '../../components/products/ProductStyled'



const Home = () => {




    const [product, setProduct]= useState(<ProductList/>) 

    const changingView=(param)=>{
      if(param===0){
        setProduct(<ProductStyled><div className="productList"><Product  
            key={Products[3].id}
            crimg={Products[3].crimg}
            category={Products[3].category}
            title={Products[3].title}
            location={Products[3].location}
            description={Products[3].description}/>
            <Product  
            key={Products[7].id}
            crimg={Products[7].crimg}
            category={Products[7].category}
            title={Products[7].title}
            location={Products[7].location}
            description={Products[7].description}/></div></ProductStyled>)
      } else if(param===1){

        setProduct(<ProductStyled><div className="productList"><Product  
          key={Products[1].id}
          crimg={Products[1].crimg}
          category={Products[1].category}
          title={Products[1].title}
          location={Products[1].location}
          description={Products[1].description}/>
          <Product  
          key={Products[5].id}
          crimg={Products[5].crimg}
          category={Products[5].category}
          title={Products[5].title}
          location={Products[5].location}
          description={Products[5].description}/></div></ProductStyled>)

      }else if(param===2){

        setProduct(<ProductStyled><div className="productList"><Product  
          key={Products[2].id}
          crimg={Products[2].crimg}
          category={Products[2].category}
          title={Products[2].title}
          location={Products[2].location}
          description={Products[2].description}/>
          <Product  
          key={Products[6].id}
          crimg={Products[6].crimg}
          category={Products[6].category}
          title={Products[6].title}
          location={Products[6].location}
          description={Products[6].description}/></div></ProductStyled>)

      }else if(param===3){

        setProduct(<ProductStyled><div className="productList"><Product  
          key={Products[0].id}
          crimg={Products[0].crimg}
          category={Products[0].category}
          title={Products[0].title}
          location={Products[0].location}
          description={Products[0].description}/>
          <Product  
          key={Products[4].id}
          crimg={Products[4].crimg}
          category={Products[4].category}
          title={Products[4].title}
          location={Products[4].location}
          description={Products[4].description}/></div></ProductStyled>)

      }

    }


  return (

    <>
    
        <Searcher/>
        <Category handlerFilter={changingView}/>
       
        
        {product}

        {/* <ProductList/> */}
    
    </>
  )
}

export default Home