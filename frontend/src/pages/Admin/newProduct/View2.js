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
import { ViewTwo, BoxViewTwo } from "./View2Styled";

const View2 = () => {
  const navigate = useNavigate();
  const {
    image1,
    image2,
    image3,
    image4,
    image5,
    setImage1,
    setImage2,
    setImage3,
    setImage4,
    setImage5,
    setPool,
    setGrill,
    setGym,
    setLaundry,
    setHeating,
    setPets,
    setWifi,
    setAc,
    pool,
    grill,
    gym,
    laundry,
    heating,
    pets,
    wifi,
    ac,
  } = useContext(NewProductContext);
  return (
    <BoxViewTwo>
      <div className="left"></div>
      <ViewTwo>
        <div></div>
        <div>
          <h2>Publicar producto (3 de 4): </h2>
          <h3>Ingrese las caracteristicas de su producto </h3>
          <div className="boxC">
            <div className="icon">
              <input
                defaultChecked={pool}
                type="checkbox"
                id="pool"
                name="features"
                value={true}
                onClick={() => {
                  pool ? setPool(false) : setPool(true);
                }}
              />
              <PoolIcon className="iconSize" />
              <label htmlFor="pool">Piscina</label>
            </div>
            <div className="icon">
              <input
                defaultChecked={grill}
                type="checkbox"
                id="grill"
                name="features"
                value={true}
                onClick={() => {
                  setGrill(true);
                  grill ? setGrill(false) : setGrill(true);
                }}
              />
              <OutdoorGrillIcon className="iconSize" />
              <label htmlFor="grill">BBQ</label>
            </div>
            <div className="icon">
              <input
                defaultChecked={gym}
                type="checkbox"
                id="gym"
                name="features"
                value={true}
                onClick={() => {
                  gym ? setGym(false) : setGym(true);
                }}
              />
              <FitnessCenterIcon className="iconSize" />
              <label htmlFor="gym">Gimnasio</label>
            </div>
            <div className="icon">
              <input
                defaultChecked={laundry}
                type="checkbox"
                id="laundry"
                name="features"
                value={true}
                onClick={() => {
                  laundry ? setLaundry(false) : setLaundry(true);
                }}
              />
              <DryCleaningIcon className="iconSize" />
              <label htmlFor="laundry">Lavanderia</label>
            </div>
            <div className="icon">
              <input
                type="checkbox"
                defaultChecked={heating}
                id="heating"
                name="features"
                value={true}
                onClick={() => {
                  heating ? setHeating(false) : setHeating(true);
                }}
              />
              <HvacIcon className="iconSize" />
              <label htmlFor="heating">Calefaccion</label>
            </div>
            <div className="icon">
              <input
                defaultChecked={pets}
                type="checkbox"
                id="pets"
                name="features"
                value={true}
                onClick={() => {
                  pets ? setPets(false) : setPets(true);
                }}
              />
              <PetsIcon className="iconSize" />
              <label htmlFor="pets">Recibe mascotas</label>
            </div>
            <div className="icon">
              <input
                defaultChecked={wifi}
                type="checkbox"
                id="wifi"
                name="features"
                value={true}
                onClick={() => {
                  wifi ? setWifi(false) : setWifi(true);
                }}
              />
              <WifiIcon className="iconSize" />
              <label htmlFor="wifi">WiFi</label>
            </div>
            <div className="icon">
              <input
                defaultChecked={ac}
                type="checkbox"
                id="ac"
                name="features"
                value={true}
                onClick={() => {
                  ac ? setAc(false) : setAc(true);
                }}
              />
              <AirIcon className="iconSize" />
              <label htmlFor="ac">Aire Acondicionado</label>
            </div>
          </div>
          <div id="box2">
            <div>
              <div>
                <div>
                  <h3>Agregue 5 imágenes de su producto:</h3>
                </div>
                <div className="imgBox">
                  <label>Imágen 1</label>
                  <input
                    type="text"
                    value={image1}
                    className="form-control"
                    placeholder="URL de la imagen"
                    maxLength="600"
                    onChange={(e) => setImage1(e.target.value)}
                  />
                  <label>Imágen 2</label>
                  <input
                    type="text"
                    value={image2}
                    className="form-control"
                    placeholder="URL de la imagen"
                    maxLength="600"
                    onChange={(e) => setImage2(e.target.value)}
                  />
                  <label>Imágen 3</label>
                  <input
                    type="text"
                    value={image3}
                    className="form-control"
                    placeholder="URL de la imagen"
                    maxLength="600"
                    onChange={(e) => setImage3(e.target.value)}
                  />
                  <label>Imágen 4</label>
                  <input
                    type="text"
                    value={image4}
                    className="form-control"
                    placeholder="URL de la imagen"
                    maxLength="600"
                    onChange={(e) => setImage4(e.target.value)}
                  />
                  <label>Imágen 5</label>
                  <input
                    type="text"
                    value={image5}
                    className="form-control"
                    placeholder="URL de la imagen"
                    maxLength="600"
                    onChange={(e) => setImage5(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => navigate("/newProduct/ubication")}>Atrás</button>
          <button onClick={() => navigate("/newProduct/preview")}>
            Siguiente
          </button>
        </div>
      </ViewTwo>
    </BoxViewTwo>
  );
};

export default View2;
