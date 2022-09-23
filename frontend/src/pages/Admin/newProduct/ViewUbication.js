import axios from "axios";
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

  const {setCitySelected, setDirection, direction, citySelected} = useContext(NewProductContext);
  const [city, setCity] = useState([])
  const handSelectChange = ({value}) => {
    setCitySelected(value);
  };
  const loadCities = () => {
    axiosHelper.get("/city")
      .then(res => {
        setCity(res.data)
      })
  };
  useEffect(loadCities,[])

  const [address, setAddres] = useState(" ")
  const location = direction.replace(/ /g, "-");
  const API =
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCTkrc-Q24MXY0y3KNPyDDijJUjVDkjeY4`;
  
    useEffect(() => {
      const loadData = async () => {
        try {
          await axios.get(API).then((res) => {
            setAddres(res.data.results[0].geometry.location);
          });
        } catch (error) {
          console.log(error);
        }
      };
      loadData();
    }, [API]);


  const defaultDataMap = {lat:4.6329278 ,lng: -74.0702942}


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
                    <span className="selectLabel">{citySelected.city}</span>
                  </>
                ),
                value: {citySelected},
              }}
              options={city.map((city) => ({
                label: (
                  <div className="selectLocation">
                    <div className="cities">
                      <span> {city.name}, </span>
                      <span className="country"> {city.country}</span>
                    </div>
                  </div>
                ),
                value:{ id: city.id, city: `${city.name},${city.country}`},
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
        <div className="map">
          <Map data = {address !== " " ? address : defaultDataMap}/>
        </div>

       

        <button onClick={(() => navigate("/newProduct"))}>
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