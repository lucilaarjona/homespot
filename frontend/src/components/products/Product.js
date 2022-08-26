import React from "react";
import { Link } from "react-router-dom";
import { ProductStyled } from "./ProductStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import AirIcon from '@mui/icons-material/Air';
import HvacIcon from '@mui/icons-material/Hvac';
import WifiIcon from '@mui/icons-material/Wifi';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PetsIcon from '@mui/icons-material/Pets';
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import PoolIcon from "@mui/icons-material/Pool";

const Product = (props) => {
  return (
    <ProductStyled>
      <span className="cardProduct">
        <img className="imgProduct" src={props.crimg} alt="imagen producto" />
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
            {props.ac ? (
              <>
                <li>
                  <AirIcon className="icons" />
                </li>
              </>
            ) : null}
            {props.gym ? (
              <>
                <li>
                  <FitnessCenterIcon className="icons" />
                </li>
              </>
            ) : null}
            {props.grill ? (
              <>
                <li>
                  <OutdoorGrillIcon className="icons" />
                </li>
              </>
            ) : null}
            {props.pool ? (
              <>
                <li>
                  <PoolIcon className="icons" />
                </li>
              </>
            ) : null}
            {props.wifi ? (
              <>
                <li>
                  <WifiIcon className="icons" />
                </li>
              </>
            ) : null}
            {props.heating ? (
              <>
                <li>
                  <HvacIcon className="icons" />
                </li>
              </>
            ) : null}
            {props.laundry ? (
              <>
                <li>
                  <DryCleaningIcon className="icons" />
                </li>
              </>
            ) : null}
            {props.pets ? (
              <>
                <li>
                  <PetsIcon className="icons" />
                </li>
              </>
            ) : null}
          </div>
          <p className="description">{props.description}</p>
          <Link to={`/product/${props.id}`}>
            {" "}
            <button className="verMas">ver</button>{" "}
          </Link>
        </div>
      </span>
    </ProductStyled>
  );
};

export default Product;
