import React, { useState, useCallback, useEffect } from "react";
import { ProductStyled } from "./ProductStyled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import StarIcon from "@mui/icons-material/Star";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import PoolIcon from "@mui/icons-material/Pool";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import NoStrollerIcon from "@mui/icons-material/NoStroller";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import BlockIcon from "@mui/icons-material/Block";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import AirIcon from '@mui/icons-material/Air';
import HvacIcon from '@mui/icons-material/Hvac';
import WifiIcon from '@mui/icons-material/Wifi';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PetsIcon from '@mui/icons-material/Pets';
import axios from "axios";

const Product = () => {
  //Ruta dinamica
  const { id } = useParams();
  //llamado a la api
  const [products, setProducts] = useState("");
  const loadData = async () => {
    try {
      await axios.get(`http://18.118.83.144:8080/product/${id}`).then((res) => {
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products.features);

  useEffect(() => {
    loadData();
  }, []);

  //Calendario
  const date = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <ProductStyled>
      {products ? (
        <>
          <header>
            <div className="title">
              <div id="categorie">{products.category.title}</div>

              <div id="name">{products.name}</div>
            </div>
            <div className="back">
              <Link to="/">
                <ArrowBackIcon className="iconBack" />
              </Link>
            </div>
          </header>
          <section>
            <div className="ubication">
              <div>
                <LocationOnIcon className="iconLocation" />
                {products.city.name}, {products.city.country}
              </div>
            </div>
            <div className="score">
              <div className="scoreTitle">
                Puntuacion: 4 <StarIcon className="iconStar" />{" "}
              </div>
            </div>
          </section>
          <div className="containerSlider">
            <div className="container">
              <input type="radio" name="slider" id="item-1" defaultChecked />
              <input type="radio" name="slider" id="item-2" />
              <input type="radio" name="slider" id="item-3" />
              <input type="radio" name="slider" id="item-4" />
              <input type="radio" name="slider" id="item-5" />

              <div className="cards">
                <label className="card" id="selector-1" htmlFor="item-1">
                  <img
                    alt={products.images[0].title}
                    src= {products.images[0].url}
                  />
                </label>
                <label className="card" id="selector-2" htmlFor="item-2">
                  <img
                    alt={products.images[1].title}
                    src= {products.images[1].url}                  />
                </label>
                <label className="card" id="selector-3" htmlFor="item-3">
                  <img
                    alt={products.images[2].title}
                    src= {products.images[2].url}                  />
                </label>
                <label className="card" id="selector-4" htmlFor="item-4">
                  <img
                    alt={products.images[3].title}
                    src= {products.images[3].url}                  />
                </label>
                <label className="card" id="selector-5" htmlFor="item-5">
                  <img
                    alt={products.images[4].title}
                    src= {products.images[4].url}                  />
                </label>
              </div>
              <button onClick={() => openImageViewer()} className="images">
                ver más <FullscreenIcon />
              </button>
            </div>
            {isViewerOpen && (
              <ImageViewer
                src={products.images.map((item) => item.url)}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                }}
                closeOnClickOutside={true}
                className = "viewImages"
              />
            )}
            <div className="description">
              <h2 className="descriptionTitle">Descripcion del producto</h2>
              <p>{products.description}</p>
              <div>
                <h2 className="features">Qué ofrece este lugar?</h2>
                <ul className="featuresList">
                  {products.features.ac ? <><li> <AirIcon className="featuresIcon" /> A/C </li></>   : null}
                  {products.features.gym ? <><li> <FitnessCenterIcon className="featuresIcon" /> Gym </li></>   : null}
                  {products.features.grill ? <><li> <OutdoorGrillIcon className="featuresIcon" /> BBQ </li></>   : null}
                  {products.features.pool ? <><li> <PoolIcon className="featuresIcon" /> Piscina </li></>   : null}
                  {products.features.wifi ? <><li> <WifiIcon className="featuresIcon" /> Wi-fi</li></>   : null}
                  {products.features.heating ? <> <li><HvacIcon className="featuresIcon" />Calefaccion</li> </>   : null}
                  {products.features.laundry ? <> <li> <DryCleaningIcon className="featuresIcon" />Lavanderia</li></>   : null}
                  {products.features.pets ? <> <li><PetsIcon className="featuresIcon" />Recibe mascotas</li></>  : null}
                </ul>
              </div>
            </div>
          </div>
          <div className="reservation">
            <div className="calendar">
              <h2>Fechas Disponibles</h2>
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={false}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
                className="calendarElementDesktop"
                minDate={date}
                maxDate={maxDate}
              />
               <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={false}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                direction="horizontal"
                className="calendarElement"
                minDate={date}
                maxDate={maxDate}
              />
            </div>
            <div className="startReservation">
              <span>
                Agrega tus fechas de viaje para obtener precios exactos{" "}
              </span>
              <button>Iniciar reserva</button>
            </div>
          </div>
          <div className="policies">
            <h3>Lo que debes saber</h3>
            <div className="policiesSection">
              <div className="titlePolicie">
                Reglas de la casa
                <span>
                  <ul className="policiesContainer">
                    <li>
                      <WatchLaterIcon className="IconPolicie" />
                      Check-in: 16:00 a 19:00
                    </li>
                    <li>
                      <AccessTimeIcon className="IconPolicie" />
                      Salida: 11:00
                    </li>
                    <li>
                      <NoStrollerIcon className="IconPolicie" />
                      No apto para niños ni bebés
                    </li>
                    <li>
                      <SmokeFreeIcon className="IconPolicie" />
                      Prohibido fumar
                    </li>
                    <li>
                      <DoNotDisturbOnIcon className="IconPolicie" />
                      No se admiten mascotas
                    </li>
                    <li>
                      <BlockIcon className="IconPolicie" />
                      Está prohibido hacer fiestas o eventos
                    </li>
                  </ul>
                </span>
              </div>
              <div className="titlePolicie">
                Salud y seguridad
                <span>
                  <ul>
                    <li>
                      <SanitizerIcon className="IconPolicie" />
                      Se aplican las prácticas de seguridad de Airbnb
                      relacionadas con la COVID-19
                    </li>
                    <li>
                      <NewReleasesIcon className="IconPolicie" />
                      Piscina/jacuzzi sin puertas ni cerraduras
                    </li>
                    <li>
                      <NewReleasesIcon className="IconPolicie" />
                      Cerca de un lago, un río u otro cuerpo de agua
                    </li>
                    <li>
                      <UpcomingIcon className="IconPolicie" />
                      Alarma de monóxido de carbono
                    </li>
                    <li>
                      <NotificationsActiveIcon className="IconPolicie" />
                      Alarma de humo
                    </li>
                  </ul>
                </span>
              </div>
              <div className="titlePolicie">
                Política de cancelación
                <div>
                  Cancelación gratuita por 48 horas. <br />
                  Consulta la política de cancelación completa del anfitrión,
                  que se aplica incluso si cancelas por problemas de salud,
                  incluidos aquellos causados por la COVID-19.
                </div>
              </div>
            </div>
          </div>
        </>
      ) : <div>Cargando producto....</div>}
    </ProductStyled>
  );
};

export default Product;
