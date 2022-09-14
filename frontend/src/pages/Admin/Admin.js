import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HeaderAdminStyle, FormAdmi } from "./StyledAdmin";

const Admin = () => {
  return (
    <>
      <HeaderAdminStyle>
        <header>
          <div className="title">
            <div id="name">Administración</div>
          </div>
          <ArrowBackIcon className="iconBack" />
        </header>
      </HeaderAdminStyle>
      <h2>Crear propiedad</h2>
      <FormAdmi>
        <label>Nombre de la propiedad</label>
        <input type="text" placeholder="Hotel Miramar"/>
        <label> Categoria</label>
        <input/>
        <label> Dirección</label>
        <input type="text" placeholder="Av calle falsa 123" />
        <input/>
        <textarea placeholder="Escribir aquí..." maxLength="1000"/>




      </FormAdmi>
    </>
  );
};

export default Admin;
