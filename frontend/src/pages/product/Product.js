import React, { useState, useCallback } from "react";
import { ProductStyled } from "./ProductStyled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import Products from "../../components/products/Products.json";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import StarIcon from "@mui/icons-material/Star";
import WifiIcon from "@mui/icons-material/Wifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import PoolIcon from "@mui/icons-material/Pool";
import HotTubIcon from "@mui/icons-material/HotTub";
import HikingIcon from "@mui/icons-material/Hiking";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import NoStrollerIcon from '@mui/icons-material/NoStroller';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import BlockIcon from '@mui/icons-material/Block';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const Product = () => {
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
  //Ruta dinamica
  const { id } = useParams();
  // const [product, setProduct] = useState([])
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7166937/pexels-photo-7166937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
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
      <header>
        <div className="title">
          <div id="categorie">{Products[id - 1].category}</div>
          <div id="name">{Products[id - 1].title}</div>
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
            {Products[id - 1].location}
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
                alt="image1"
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </label>
            <label className="card" id="selector-2" htmlFor="item-2">
              <img
                alt="image2"
                src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </label>
            <label className="card" id="selector-3" htmlFor="item-3">
              <img
                alt="image3"
                src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </label>
            <label className="card" id="selector-4" htmlFor="item-4">
              <img
                alt="image4"
                src="https://images.pexels.com/photos/7166937/pexels-photo-7166937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </label>
            <label className="card" id="selector-5" htmlFor="item-5">
              <img
                alt="image5"
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </label>
          </div>
          <button onClick={() => openImageViewer()} className="images">
            ver más <FullscreenIcon/>
          </button>
        </div>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
        <div className="description">
          <h2 className="descriptionTitle">Descripcion del producto</h2>
          <p>{Products[id - 1].description}</p>
          <div>
            <h2 className="features">Qué ofrece este lugar?</h2>
            <ul className="featuresList">
              <li>
                <WifiIcon className="featuresIcon" /> Wifi
              </li>
              <li>
                <FitnessCenterIcon className="featuresIcon" /> Gym
              </li>
              <li>
                <OutdoorGrillIcon className="featuresIcon" /> BBQ
              </li>
              <li>
                <PoolIcon className="featuresIcon" /> Piscina
              </li>
              <li>
                <HotTubIcon className="featuresIcon" /> Spa
              </li>
              <li>
                <HikingIcon className="featuresIcon" /> Caminatas
              </li>
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
            className="calendarElement"
            minDate={date}
            maxDate={maxDate}
          />
        </div>
        <div className="startReservation">
          <span>Agrega tus fechas de viaje para obtener precios exactos </span>
          <button>Iniciar reserva</button>
        </div>
      </div>
      <div className="policies">
        <h3>Lo que debes saber</h3>
        <div className="policiesSection">
          <div className="titlePolicie">
            Reglas de la casa
            <span>
              <ul>
                <li><WatchLaterIcon className="IconPolicie"/>Check-in: 16:00 a 19:00</li>
                <li><AccessTimeIcon className="IconPolicie"/>Salida: 11:00</li>
                <li><NoStrollerIcon className="IconPolicie"/>No apto para niños ni bebés</li>
                <li><SmokeFreeIcon className="IconPolicie"/>Prohibido fumar</li>
                <li><DoNotDisturbOnIcon className="IconPolicie"/>No se admiten mascotas</li>
                <li><BlockIcon className="IconPolicie"/>Está prohibido hacer fiestas o eventos</li>
              </ul>
            </span>
          </div>
          <div className="titlePolicie">
          Salud y seguridad
          <span>
              <ul>
                <li><SanitizerIcon className="IconPolicie"/>Se aplican las prácticas de seguridad de Airbnb relacionadas con la COVID-19</li>
                <li><NewReleasesIcon className="IconPolicie"/>Piscina/jacuzzi sin puertas ni cerraduras</li>
                <li><NewReleasesIcon className="IconPolicie"/>Cerca de un lago, un río u otro cuerpo de agua</li>
                <li><UpcomingIcon className="IconPolicie"/>Alarma de monóxido de carbono</li>
                <li><NotificationsActiveIcon className="IconPolicie"/>Alarma de humo</li>
              </ul>
            </span>
            </div>
          <div className="titlePolicie">
          Política de cancelación
          <div>
          Cancelación gratuita por 48 horas. <br/>
Consulta la política de cancelación completa del anfitrión, que se aplica incluso si cancelas por problemas de salud, incluidos aquellos causados por la COVID-19.
          </div>
          </div>
        </div>
      </div>
    </ProductStyled>
  );
};

export default Product;