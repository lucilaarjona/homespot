import React, {  useContext ,useEffect, useState } from "react";
// import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled, Divc } from "./ProductStyled";
import { CategoryContext } from "../../context/CategoryContext";
import { CityContext } from "../../context/CityContext";
import { ProductContext } from "../../context/ProductContext";
import Pagination from "./Pagination";

const ProductList = () => {
  const {citySelected} = useContext(CityContext);
  const {categorieSelected } = useContext(CategoryContext);
  const [productsFilter, setProductsFilter] = useState([]);
  const {products}= useContext(ProductContext)

//Pagination
  const [currentPage, setCurrentPage]= useState(1);
  const[cardsPerPage]=useState(4)

// Get current posts
    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;
    const currentPosts = productsFilter.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);


  


  useEffect(()=>{
    if (categorieSelected === "") {
      setProductsFilter(products);
    }},[categorieSelected, products])

    useEffect(() => {
      if (citySelected === "") {
        setProductsFilter(products);
      } else {
        const getFilterByCity = products.filter(
          (product) => `${product.city.name},${product.city.country}` === citySelected
        );
        setProductsFilter(getFilterByCity);
      }
    },[citySelected, products]);


  useEffect(() => {
    if (categorieSelected === "") {
      setProductsFilter(products);
    } else {
      const getFilterByCategory = products.filter(
        (product) => product.category.title === categorieSelected
      );
      setProductsFilter(getFilterByCategory);
    }
  },[categorieSelected, products]);





  return (

     <Divc>
    <ProductStyled>
    {!categorieSelected  ? (<> <h1 className="titleSection">Nuestras recomendaciones para ti</h1> </> ): null}
      {/* {!products ?   console.log(products[0].images[0].url) : null } */}
    
   
     {products ? ( <section className="productList">
        {/* {productsFilter.map((product, index) => { */}
           {currentPosts.map((product, index) => {

          return (
            <Product
              key={index}
              id = {product.id}
              crimg={product?.images[0]?.url}
              category={product.category.title}
              title={product.name}
              location={`${product.city.name},${product.city.country}`}
              description={product.description}
              ac = {product.features.ac}
              gym = {product.features.gym}
              pool = {product.features.pool}
              grill = {product.features.grill}
              pets = {product.features.pets}
              laundry = {product.features.laundry}
              heating = {product.features.heating}
              wifi = {product.features.wifi}

            />
         
          );
        })}
      </section>):null}

      <Pagination cardsPerPage={cardsPerPage} totalPosts={products.length} paginate={paginate}/>
      
    </ProductStyled>
    
    </Divc>
  
  );
};

export default ProductList;
