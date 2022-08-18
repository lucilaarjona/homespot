import React from "react";
import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled } from "./ProductStyled";


const baseURL = `http://localhost:8080/products`

async function getProduct() {
  try {
    const response = axios({
      url: `${baseURL}/products`,
      method: 'GET'
    })
    return response
  } catch (error) {

  }

}


const ProductList = () => {
  const [product, setProduct] = useState(Products);

  useEffect(() => {
    async function LoadProduct() {
      const response = await getProduct();
      return response
    }
    LoadProduct()
  })


  return (
    <ProductStyled>
      <section className="productList">
        {Products.map((product, index) => {
          return (
            <Product
              key={index}
              crimg={product.crimg}
              category={product.category}
              title={product.title}
              location={product.location}
              description={product.description}
            />
          );
        })}
      </section>
    </ProductStyled>
  );
};

export default ProductList;
