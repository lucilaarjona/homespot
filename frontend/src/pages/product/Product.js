import React from "react";
import { ProductStyled } from "./ProductStyled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  
  useParams();
  console.log(useParams());
  return (
    <ProductStyled>
      <header>
        <div className="title">
          <div id="categorie">Categoria del producto</div>
          <div id="name">Nombre del producto</div>
        </div>
        <div className="back">
          <Link to="/">
            <ArrowBackIcon />
          </Link>
        </div>
      </header>
      <section>
        <div className="ubication">
          <div>
            <LocationOnIcon />
            Ubicacion
          </div>
          <div className="score">Distancia</div>
        </div>
        <div>Calificacion</div>
      </section>
      <div className="galery">
      </div>
    </ProductStyled>
  );
};

export default Product;
