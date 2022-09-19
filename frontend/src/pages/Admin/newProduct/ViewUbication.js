import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Select from "react-select";
import Map from "../../../components/Map/Map";
import { NewProductContext } from "../../../context/NewProduct";
import axiosHelper from "../../../helper/axiosHelper";





const ViewUbication = () => {

  const {setCitySelected, setDirection} = useContext(NewProductContext);
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
    <div>
    <div>
        <div className="title2">Seleccione la ubicación de la propiedad:</div>
        <Select
        
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
            className="form-control" 
              type="text"
              id="name"
              onChange={(e) => setDirection(e.target.value)}
            />
          </label>
        </div>
        <div>
          <Map/>
        </div>
    </div>
  )
}

export default ViewUbication