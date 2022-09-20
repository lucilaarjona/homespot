import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Map from "../../../components/Map/Map";
import { NewProductContext } from "../../../context/NewProduct";
import axiosHelper from "../../../helper/axiosHelper";
import { Ubication, BoxUbication } from "./UbicationStyled";





const ViewUbication = () => {

  const navigate= useNavigate();

  const {setCitySelected, setDirection, direction} = useContext(NewProductContext);
  const [city, setCity] = useState([])
  const handSelectChange = ({ value }) => {
    setCitySelected(value);
  };
  const loadCities = () => {
    axiosHelper.get("/city")
      .then(res => {
        setCity(res.data)
      })
  };
  useEffect(loadCities,[])
  return (
    <BoxUbication>
           <div className="left"></div>
    <Ubication>


    <div>
      <h2>Publicar producto (2 de 4): </h2> 
        </div>
      

      <div>

      <div className="box1">
        <div className="title2">Seleccione la ubicación de la propiedad:</div>
        <Select

        className="select"
        
              defaultValue={{
                label: (
                  <>
                    <span className="selectLabel">¿A dónde vamos? </span>
                  </>
                ),
                value: "default",
              }}
              options={city.map((city) => ({
                label: (
                  <div className="selectLocation">
                    <div className="cities">
                      <span> {city.name}, </span>{" "}
                      <span className="country"> {city.country}</span>
                    </div>
                  </div>
                ),
                value: city.id,
              }))}
              onChange={handSelectChange}
            />
        </div>
        <div>
          <label className="title2" htmlFor="">
            Escriba la dirección de la propiedad:
            <input

            value={direction}
            className="form-control" 
              type="text"
              id="name"
              onChange={(e) => setDirection(e.target.value)}
            />
          </label>
        </div>
        </div>
        <h3>Confirme su ubicación:</h3>
        <div>
          <Map/>
        </div>

       

        <button onClick={(() => navigate(-1))}>
         Atrás
        </button>
        <button onClick={(() => navigate("/newProduct/features"))}>
          Siguiente
        </button>
        </Ubication>
    </BoxUbication>
  )
}

export default ViewUbication