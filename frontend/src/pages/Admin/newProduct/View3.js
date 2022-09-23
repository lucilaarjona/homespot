import React, { useContext } from "react";
import { NewProductContext } from "../../../context/NewProduct";
import axiosHelper from "../../../helper/axiosHelper";
import { useNavigate } from "react-router-dom";
import { BoxViewThree, ViewThree  } from "./view3Styled";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import ProductPreview from "../../../components/ProductsPreview/ProductPreview";

const View3 = () => {


  const MySwal = withReactContent(Swal)
  
  const navigate = useNavigate();

  const {
    setPrice,
    categorySelected,
    name,
    direction,
    description,
    citySelected,
    pool,
    grill,
    gym,
    laundry,
    heating,
    pets,
    wifi,
    ac,
    image1,
    image2,
    image3,
    image4,
    image5,
    norms,
    cancellationPolicy,
    healthAndSecurity,
    price,
    discount,
    nameCategory,
    setDiscount,
  } = useContext(NewProductContext);

  const product = {
    name: name,
    description: description,
    category: {id:categorySelected},
    images: [{

            title: "Imagen 1",
            url: image1
        },
        {

            title: "Imagen 2",
            url: image2
        },
        {

            title: "imagen 3",
            url: image3
        },
        {

            title: "Imagen 4",
            url: image4
        },
        {

            title: "Imagen 5",
            url: image5
        }],
    city: {
        id: citySelected.id
    },
    features:{
        pool: pool,
        grill: grill,
        gym: gym,
        laundry: laundry,
        heating: heating,
        pets: pets,
        wifi: wifi,
        ac: ac},
        policy: {
          nomrs: norms,
          cancellationPolicy: cancellationPolicy,
          healthAndSecurity: healthAndSecurity
          },
    address: direction,
    price: price,
    discount: discount
};

  const postProduct = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    axiosHelper
      .post(
        "/product",
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/")
          window.location.reload();
        } else if (res.status === 400) {
          console.log("respuesta1 ", res.data.data);
        }
      })
      .catch((error) =>
      MySwal.fire({
        html: <strong>Lamentablemente el producto no ha podido crearse. Por favor intente más tarde</strong>,
        icon: 'warning',
      })
      );
  };

  return (
    <BoxViewThree>
      <div className="left"></div>
      <ViewThree>
      <h2>Publicar producto (4 de 4): </h2> 
        <div>
          <div>Indique el precio del producto (En dolares (USD)) por noche</div>
          <input
          className="form-control"
            type="number"
            step="0.01"
            min="0"
            required
            onChange={(e) => setPrice(e.target.value)}
            value = {price}
          />
        </div>
        <div>
          <div>¿Desea agregarle un descuento al producto?</div>
          <input
          className="form-control"
            type="number"
            step="5"
            min="0"
            max="100"
            required
            onClick={(e) => {
              setDiscount(e.target.value);
            }}
            defaultValue = {discount}
          />
        </div>

       

        <ProductPreview
          id={null}
          crimg={product?.images[0]?.url}
          category={nameCategory}
          price = {product.price}
          discount = {product.discount}
          title={product.name}
          location={citySelected.city}
          description={product.description}
          ac={product.features.ac}
          gym={product.features.gym}
          pool={product.features.pool}
          grill={product.features.grill}
          pets={product.features.pets}
          laundry={product.features.laundry}
          heating={product.features.heating}
          wifi={product.features.wifi}
        />



        <div>

<button className="btn" onClick={(() => navigate("/newProduct/features"))}>
         Atrás
        </button>

        <button
        id="btn"
        className="btn"
          onClick={(e) => {
            e.preventDefault();
            postProduct();
          }}
          type="submit"
        >
          Publicar producto
        </button>
        </div>
      </ViewThree>
    </BoxViewThree>
  );
};

export default View3;
