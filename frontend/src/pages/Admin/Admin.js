import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HeaderAdminStyle, FormAdmi } from "./StyledAdmin";
import Select from "react-select";
import axiosHelper from "../../helper/axiosHelper";
import { Link } from "react-router-dom";

const Admin = () => {
  const [categories, setCategories] = useState("");

  const options = [
    { value: 1, label: "Casa" },
    { value: 2, label: "Departamento" },
    { value: 3, label: "Casa de playa" },
    { value: 4, label: "Casa de cabaña" },
  ];

  const categoriesSelect = ({ value }) => {
    setCategories(value);
  };

  const [city, setCity] = useState([]);
  const loadData = () => {
    axiosHelper.get("/city").then((res) => {
      setCity(res.data);
    });
  };

  useEffect(loadData, []);

  const [citySelect, setCitySelect] = useState("");

  const selectCity = ({ value }) => {
    setCitySelect(value);
  };


  

console.log();

  return (
    <>
      <HeaderAdminStyle>
        <header>
          <div className="title">
            <div id="name">Administración</div>
          </div>
          <Link to="/">
          <ArrowBackIcon className="iconBack" />
          </Link>
        </header>
      </HeaderAdminStyle>
      <h2>Crear propiedad</h2>
      <FormAdmi>
        <label>Nombre de la propiedad</label>
        <input type="text" placeholder="Hotel Miramar" />
        <label> Categoria</label>
        <Select
          defaultValue={{
            label: <span>Casa</span>,
            value: 1,
          }}
          options={options}
          onChange={categoriesSelect}
          isDisabled={false}
          isSearchable={false}
          isRtl={false}
          required
        />
        <label> Dirección</label>
        <input type="text" placeholder="Av calle falsa 123" />
        <label>Ciudad</label>
        <Select
          defaultValue={{
            label: (
              <>
                <span> Ciudad </span>
              </>
            ),
            value: "default",
          }}
          options={city.map((city) => ({
            label: (
              <div className="cities">
                <span> {city.name}, </span>{" "}
                <span className="country"> {city.country}</span>
              </div>
            ),
            value: `${city.name},${city.country}`,
          }))}
          onChange={selectCity}
        />
        <label>Descripción</label>
        <textarea placeholder="Escribir aquí..." maxLength="600" />

        <h3>Agregar atributos</h3>
        <p>Seleccionar atributos de la propiedad</p>
        <label>Piscina<input type="checkbox"  value="pool"></input></label>
        <label>BBQ<input  type="checkbox" value="grill"></input></label>
        <label>Gimnasio<input type="checkbox" value="gym"></input></label>
        <label>Lavanderia<input type="checkbox" value="laundry"></input></label>
        <label>Calefaccion<input type="checkbox" value="heating"></input></label>
        <label>Mascotas<input type="checkbox" value="pets"></input></label>
        <label>Wifi<input type="checkbox" value="wifi"></input></label>
        <label>Aire Acondicionado<input type="checkbox" value="ac"/></label>


        <h3>Cargar imágenes</h3>
        <input type="file"  accept="image/png, image/jpeg" multiple/>

        <h3> Precio</h3>

        <button type="submit"> Publicar producto</button>

    

      </FormAdmi>
    </>
  );
};

export default Admin;
