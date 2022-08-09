import React from "react";
import { ProductStyled } from "./ProductStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot,
  faWifi,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";

const star = <FontAwesomeIcon className="stars" icon={faStar} />;
const Product = (props) => {
  return (
    <ProductStyled>
      <span className="cardProduct">
        <img className="imgProduct" src={props.crimg} />
        <div className="caption">
          <span className="category">{props.category}</span>
          <span>
            <FontAwesomeIcon className="stars" icon={faStar} />
            <FontAwesomeIcon className="stars" icon={faStar} />
            <FontAwesomeIcon className="stars" icon={faStar} />
            <FontAwesomeIcon className="stars" icon={faStar} />
          </span>
          <div className="title">{props.title}</div>
          <div className="ubication">
            <span>
              <FontAwesomeIcon className="iconLocation" icon={faLocationDot} />
            </span>
            <span className="location">
            {props.location} - <span className="map">MOSTRAR EN EL MAPA</span>{" "}
            </span>
          </div>
          <div className="icons">
          <span>
            <FontAwesomeIcon className="icon" icon={faWifi} />
          </span>
          <span>
            <FontAwesomeIcon className="icon" icon={faSwimmingPool} />
          </span>
          </div>
          <p className="description">{props.description}</p>
          <button className="verMas">Ver</button>
        </div>
      </span>
    </ProductStyled>
  );
};

export default Product;
