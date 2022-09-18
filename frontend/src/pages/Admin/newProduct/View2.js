import React from "react";
import PoolIcon from "@mui/icons-material/Pool";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import HvacIcon from "@mui/icons-material/Hvac";
import PetsIcon from "@mui/icons-material/Pets";
import WifiIcon from "@mui/icons-material/Wifi";
import AirIcon from "@mui/icons-material/Air";
import { useContext } from "react";
import { NewProductContext } from "../../../context/NewProduct";
import { useNavigate } from "react-router-dom";

const View2 = () => {
  const navigate = useNavigate();
  const { setNorms,setHealthAndSecurity,setCancellationPolicy,setImage1,setImage2,setImage3,setImage4,setImage5,setPool, setGrill, setGym, setLaundry, setHeating, setPets, setWifi, setAc} = useContext(NewProductContext)
  return (
    <div>
      <div></div>
      <div>
        <div>
          <h2>Con cuales de estas caracteristicas cuenta su propiedad</h2>
          <label htmlFor="pool">
            Piscina
            <input
              type="checkbox"
              id="pool"
              name="features"
              value={true}
              onClick={() => {
                setPool(true);
              }}
            />
            <PoolIcon />
          </label>
          <label htmlFor="grill">
            BBQ
            <input 
            type="checkbox" 
            id="grill" 
            name="features" 
            value={true}
            onClick={() => {
              setGrill(true);
              }} />
            <OutdoorGrillIcon />
          </label>
          <label htmlFor="gym">
            Gimnasio
            <input 
            type="checkbox" 
            id="gym" 
            name="features" 
            value={true}
            onClick={() => {
              setGym(true);
              }} />
            <FitnessCenterIcon />
          </label>
          <label htmlFor="laundry">
            Lavanderia
            <input 
            type="checkbox" 
            id="laundry" 
            name="features" 
            value={true}
            onClick={() => {
              setLaundry(true);
              }} />
            <DryCleaningIcon />
          </label>
          <label htmlFor="heating">
            Calefaccion
            <input 
            type="checkbox" 
            id="heating" 
            name="features" 
            value={true}
            onClick={() => {
              setHeating(true);
              }}/>
            <HvacIcon />
          </label>
          <label htmlFor="pets">
            Recibe mascotas
            <input 
            type="checkbox" 
            id="pets" 
            name="features" 
            value={true}
            onClick={() => {
              setPets(true);
              }} />
            <PetsIcon />
          </label>
          <label htmlFor="wifi">
            WiFi
            <input 
            type="checkbox" 
            id="wifi" 
            name="features" 
            value={true}
            onClick={() => {
              setWifi(true);
              }} />
            <WifiIcon />
          </label>
          <label htmlFor="ac">
            Aire Acondicionado
            <input 
            type="checkbox" 
            id="ac" 
            name="features" 
            value={true}
            onClick={() => {
              setAc(true);
              }} />
            <AirIcon />
          </label>
        </div>
        <div>
        <div>
        Agregue 5 imagenes de su producto
        </div>
        <label>
            Aqui la imagen principal de su producto
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage1(e.target.value)}
            />
          </label>
          <label>
          Imagen 2
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage2(e.target.value)}
            />
          </label>
          <label>
          Imagen 3
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage3(e.target.value)}
            />
          </label>
          <label>
          Imagen 4
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage4(e.target.value)}
            />
          </label>
          <label>
            Imagen 5
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage5(e.target.value)}
            />
          </label>
        </div>
        <div>
        <h2>Ingrese las reglas de su producto </h2>
           <label>
            <div>Normas:</div>
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setNorms(e.target.value)}
            />
          </label>
           <label>
           <div>Politicas de cancelacion:</div>
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setCancellationPolicy(e.target.value)}
            />
          </label>
          <label>
          <div>Salud y seguridad:</div>
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setHealthAndSecurity(e.target.value)}
            />
          </label>

        </div>
        <button onClick={(() => navigate("/newProduct/view3"))}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default View2;
