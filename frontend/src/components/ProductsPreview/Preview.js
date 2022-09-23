import React, { useState, useCallback, useEffect, useContext } from "react";
import { ProductStyled } from "../../pages/product/ProductStyled";
import ImageViewer from "react-simple-image-viewer";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
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
import AirIcon from "@mui/icons-material/Air";
import HvacIcon from "@mui/icons-material/Hvac";
import WifiIcon from "@mui/icons-material/Wifi";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import PetsIcon from "@mui/icons-material/Pets";
import Map from "../../components/Map/Map";
import axios from "axios";
import { NewProductContext } from "../../context/NewProduct";
import HeaderProductPreview from "../HeaderProduct/HeaderPreview";

const Preview = () => {

  const {
    categorySelected,
    name,
    direction,
    description,
    citySelected,
    pool,
    grill,
    gym,
    laundry,
    heating,
    pets,
    wifi,
    ac,
    image1,
    image2,
    image3,
    image4,
    image5,
    norms,
    cancellationPolicy,
    healthAndSecurity,
    price,
    discount
  } = useContext(NewProductContext);

  const product = {
    name: name,
    description: description,
    category: {id:categorySelected},
    images: [{

            title: "Imagen 1",
            url: image1
        },
        {

            title: "Imagen 2",
            url: image2
        },
        {

            title: "imagen 3",
            url: image3
        },
        {

            title: "Imagen 4",
            url: image4
        },
        {

            title: "Imagen 5",
            url: image5
        }],
    city: {
        id: citySelected.id
    },
    features:{
        pool: pool,
        grill: grill,
        gym: gym,
        laundry: laundry,
        heating: heating,
        pets: pets,
        wifi: wifi,
        ac: ac},
        policy: {
          nomrs: norms,
          cancellationPolicy: cancellationPolicy,
          healthAndSecurity: healthAndSecurity
          },
    address: direction,
    price: price,
    discount: discount
};



  useEffect(() => {
    document.title = `${product.name}  |  HomeSpot`;
  });

  //Calendario
  const date = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const daysReservation = (range[0].endDate - range[0].startDate) / 86400000;

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

  const [addres, setAddres] = useState({})
  const location = product.address?.replace(/ /g, "-");
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

    

  return (
    <ProductStyled>
      {product ? (
        <>
          <HeaderProductPreview />
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
                    alt={product.images[0]?.title}
                    src={product.images[0]?.url}
                  />
                </label>
                <label className="card" id="selector-2" htmlFor="item-2">
                  <img
                    alt={product.images[1]?.title}
                    src={product.images[1]?.url}
                  />
                </label>
                <label className="card" id="selector-3" htmlFor="item-3">
                  <img
                    alt={product.images[2]?.title}
                    src={product.images[2]?.url}
                  />
                </label>
                <label className="card" id="selector-4" htmlFor="item-4">
                  <img
                    alt={product.images[3]?.title}
                    src={product.images[3]?.url}
                  />
                </label>
                <label className="card" id="selector-5" htmlFor="item-5">
                  <img
                    alt={product.images[4]?.title}
                    src={product.images[4]?.url}
                  />
                </label>
              </div>
              <button onClick={() => openImageViewer()} className="images">
                ver más <FullscreenIcon />
              </button>
            </div>
            {isViewerOpen && (
              <ImageViewer
                src={product.images.map((item) => item.url)}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                }}
                closeOnClickOutside={true}
                className="viewImages"
              />
            )}
            <div className="description">
              <h2 className="descriptionTitle">Descripcion del producto</h2>
              <p>{product.description}</p>
              <div>
                <h2 className="features">Qué ofrece este lugar?</h2>
                <ul className="featuresList">
                  {product.features.ac ? (
                    <>
                      <li>
                        {" "}
                        <AirIcon className="featuresIcon" /> A/C{" "}
                      </li>
                    </>
                  ) : null}
                  {product.features.gym ? (
                    <>
                      <li>
                        {" "}
                        <FitnessCenterIcon className="featuresIcon" /> Gym{" "}
                      </li>
                    </>
                  ) : null}
                  {product.features.grill ? (
                    <>
                      <li>
                        {" "}
                        <OutdoorGrillIcon className="featuresIcon" /> BBQ{" "}
                      </li>
                    </>
                  ) : null}
                  {product.features.pool ? (
                    <>
                      <li>
                        {" "}
                        <PoolIcon className="featuresIcon" /> Piscina{" "}
                      </li>
                    </>
                  ) : null}
                  {product.features.wifi ? (
                    <>
                      <li>
                        {" "}
                        <WifiIcon className="featuresIcon" /> Wi-fi
                      </li>
                    </>
                  ) : null}
                  {product.features.heating ? (
                    <>
                      {" "}
                      <li>
                        <HvacIcon className="featuresIcon" />
                        Calefaccion
                      </li>{" "}
                    </>
                  ) : null}
                  {product.features.laundry ? (
                    <>
                      {" "}
                      <li>
                        {" "}
                        <DryCleaningIcon className="featuresIcon" />
                        Lavanderia
                      </li>
                    </>
                  ) : null}
                  {product.features.pets ? (
                    <>
                      {" "}
                      <li>
                        <PetsIcon className="featuresIcon" />
                        Recibe mascotas
                      </li>
                    </>
                  ) : null}
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
                // disabledDates={[addDays(date, 10), addDays(date, 13)]}
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
                {daysReservation === 0 ? (
                  <>Por favor seleccione una fecha de llegada y una salida</>
                ) : (
                  <>
                    Su reserva por{" "}
                    {daysReservation <= 1
                      ? null
                      : `${daysReservation + 1} dias y `}{" "}
                    {daysReservation <= 1
                      ? `1 noche`
                      : `${daysReservation} noches`}{" "}
                    tendrá un costo de{" "}
                    {daysReservation === 0
                      ? (product.price -
                        ((product.price * product.discount) / 100)) * 1
                      :( product.price -
                        ((product.price * product.discount) / 100)) * daysReservation}{" "}
                    USD
                    <span></span>
                  </>
                )}
              </span>
                <button disabled>
                  {" "}
                  Iniciar reserva
                </button>
            </div>
          </div>

          <div className="policies">
            <div className="map">
              <h3>Donde vas a estar ubicado:</h3>
              <Map data = {addres}/>
            </div>
            <h3 id="titlePolicie">Lo que debes saber</h3>
            <div className="policiesSection">
              <div className="titlePolicie" id="boxRules">
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
              <div className="titlePolicie" id="boxPolicie">
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
      ) : (
        <div className="text-center" style={{ marginBottom: "300px" }}>
          <div style={{ fontSize: "28px" }}>Cargando...</div>
          <div
            className="spinner-border"
            role="status"
            style={{ color: "#FC4C4E", fontSize: "28px" }}
          ></div>
        </div>
      )}
    </ProductStyled>
  );
};

export default Preview;
