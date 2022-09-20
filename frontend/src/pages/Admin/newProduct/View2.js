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
import { ViewTwo, BoxViewTwo} from "./View2Styled";

const View2 = () => {
  const navigate = useNavigate();
  const { setNorms,setHealthAndSecurity,setCancellationPolicy,setImage1,setImage2,setImage3,setImage4,setImage5,setPool, setGrill, setGym, setLaundry, setHeating, setPets, setWifi, setAc} = useContext(NewProductContext)
  return (


    <BoxViewTwo>
      <div className="left"></div>
    <ViewTwo>
      <div></div>
      <div>
      <h2>Publicar producto (3 de 4): </h2> 
        <div className="boxC">
          <div className="icon">
            <input
              type="checkbox"
              id="pool"
              name="features"
              value={true}
              onClick={() => {
                setPool(true);
              }}
            />
              <PoolIcon className="iconSize"/>
          <label htmlFor="pool">
            Piscina
          </label>
          </div>
          <div className="icon">
            <input 
            type="checkbox" 
            id="grill" 
            name="features" 
            value={true}
            onClick={() => {
              setGrill(true);
              }} />
            <OutdoorGrillIcon  className="iconSize"/>
          <label htmlFor="grill">
            BBQ
          </label>
          </div>
        <div className="icon">
            <input 
            type="checkbox" 
            id="gym" 
            name="features" 
            value={true}
            onClick={() => {
              setGym(true);
              }} />
            <FitnessCenterIcon  className="iconSize"/>
          <label htmlFor="gym">
            Gimnasio
          </label>
          </div>
          <div className="icon">
            <input 
            type="checkbox" 
            id="laundry" 
            name="features" 
            value={true}
            onClick={() => {
              setLaundry(true);
              }} />
            <DryCleaningIcon className="iconSize"/>
          <label htmlFor="laundry">
            Lavanderia
          </label>
          </div>
          <div className="icon">
            <input 
            type="checkbox" 
            id="heating" 
            name="features" 
            value={true}
            onClick={() => {
              setHeating(true);
              }}/>
            <HvacIcon className="iconSize"/>
          <label htmlFor="heating">
            Calefaccion
          </label>
          </div>
          <div className="icon">
            <input 
            type="checkbox" 
            id="pets" 
            name="features" 
            value={true}
            onClick={() => {
              setPets(true);
              }} />
            <PetsIcon className="iconSize"/>
          <label htmlFor="pets">
            Recibe mascotas
          </label>
          </div>
          <div className="icon">
            <input 
            type="checkbox" 
            id="wifi" 
            name="features" 
            value={true}
            onClick={() => {
              setWifi(true);
              }} />
            <WifiIcon className="iconSize"/>
          <label htmlFor="wifi">
            WiFi
          </label>
          </div>
          <div className="icon">
            <input 
            type="checkbox" 
            id="ac" 
            name="features" 
            value={true}
            onClick={() => {
              setAc(true);
              }} />
            <AirIcon className="iconSize"/>
          <label htmlFor="ac">
            Aire Acondicionado
          </label>
          </div>
        </div>
        <div id="box2">
        <div >
        <div>
        <div>
        <h2>Agregue 5 imágenes de su producto:</h2>
        </div>
        <div className="imgBox">
        <label>
            Aquí la imágen principal de su producto
            </label>
            <textarea
            id="text"
            className="form-control"
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage1(e.target.value)}
            />
          <label>
          Imágen 2
          </label>
            <textarea
            id="text"
            className="form-control"
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage2(e.target.value)}
            />
          <label>
          Imágen 3
          </label>
            <textarea
            id="text"
            className="form-control"
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage3(e.target.value)}
            />
          <label>
          Imágen 4
          </label>
            <textarea
            id="text"
            className="form-control"
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage4(e.target.value)}
            />
          <label>
            Imágen 5
            </label>
            <textarea
            id="text"
            className="form-control"
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setImage5(e.target.value)}
            />
          </div>
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
        </div>
        </div>
        <button onClick={(() => navigate(-1))}>
         Atrás
        </button>
        <button onClick={(() => navigate("/newProduct/preview"))}>
          Siguiente
        </button>
      </div>
    </ViewTwo>
    </BoxViewTwo>
  );
};

export default View2;
