import React, { useEffect, useState } from "react";
import HeaderProduct from "../HeaderProduct/HeaderProduct";
import { BookingStyle } from "./BookingStyle";

import { DateRange } from "react-date-range";
import { useNavigate, useParams } from "react-router-dom";
import axiosHelper from "../../helper/axiosHelper";
import Select from "react-select";

import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Booking = () => {
  const { range } = useContext(ProductContext);
  const { setRange } = useContext(ProductContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [cityUpdate, setCityUpdate] = useState("");
  const dataUser = JSON.parse(localStorage.getItem("user"));
  // Calendario
  const date = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);
  // const [range, setRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 1),
  //     key: "selection",
  //   },
  // ]);
  const daysReservation = (range[0].endDate - range[0].startDate) / 86400000;
  const { id } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    const loadData = async () => {
      await axiosHelper.get(`/product/${id}`).then((res) => {
        setProduct(res.data);
      });
    };
    loadData();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const startDate = range[0].startDate.toLocaleString("es-ES");
  const checkInDate = startDate.split(",");
  const startDateL = range[0].startDate.toISOString();

  const endDate = range[0].endDate.toLocaleString("es-ES");
  const checkOutDate = endDate.split(",");
  const endDateL = range[0].endDate.toISOString();

  const hours = [
    { value: "00:00 AM", label: "00:00 AM" },
    { value: "01:00 AM", label: "01:00 AM" },
    { value: "02:00 AM", label: "02:00 AM" },
    { value: "03:00 AM", label: "03:00 AM" },
    { value: "04:00 AM", label: "04:00 AM" },
    { value: "05:00 AM", label: "05:00 AM" },
    { value: "06:00 AM", label: "06:00 AM" },
    { value: "07:00 AM", label: "07:00 AM" },
    { value: "08:00 AM", label: "08:00 AM" },
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
    { value: "01:00 PM", label: "01:00 PM" },
    { value: "02:00 PM", label: "02:00 PM" },
    { value: "03:00 PM", label: "03:00 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "05:00 PM", label: "05:00 PM" },
    { value: "06:00 PM", label: "06:00 PM" },
    { value: "07:00 PM", label: "07:00 PM" },
    { value: "08:00 PM", label: "08:00 PM" },
    { value: "09:00 PM", label: "09:00 PM" },
    { value: "10:00 PM", label: "10:00 PM" },
    { value: "11:00 PM", label: "11:00 PM" },
  ];

  const [hour, setHour] = useState("");
  const selectHour = ({ value }) => {
    setHour(value);
  };


  const token = JSON.parse(localStorage.getItem("token"));
  const decode = jwt_decode(token);
  const userId = decode.user_info.id;

  const booking = {
    bookingStartDate: startDateL,
    bookingEndDate: endDateL,
    product: { id: id },
    user: { id: userId },
  };

  const priceTotal = product.price - (product.price * product.discount) / 100;

  const createBooking = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axiosHelper
      .post("/booking", booking, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
          MySwal.fire({
            html: <strong>La reserva se ha creado de manera exitosa.</strong>,
            icon: "success",
            showConfirmButton: true,
            timerProgressBar: true,
            timer: 3000,
          });
        } else if (res.status === 400) {
          console.log("respuesta1 ", res.data.data);
        }
      })
      .catch((error) =>
        MySwal.fire({
          html: (
            <strong>
              Lamentablemente no ha podido crear la reserva. Por favor intente
              más tarde.
            </strong>
          ),
          icon: "warning",
        })
      );
  };

  return (
    <>
      <HeaderProduct />
      <BookingStyle>
        <div className="left">
          <h2 className="titleForm">Completá tus datos</h2>
          <form action="" className="form">
            <div className="label">
              <label htmlFor="">Nombre</label>
              <input placeholder={dataUser.name} disabled type="text" />
            </div>
            <div className="label">
              <label htmlFor="">Apellido</label>
              <input placeholder={dataUser.lastName} disabled type="text" />
            </div>
            <div className="label">
              <label htmlFor="">Correo electronico</label>
              <input type="email" placeholder={dataUser.email} disabled />
            </div>
            <div className="label">
              <label htmlFor="">Ciudad</label>
              <input
                onChange={(e) => setCityUpdate(e.target.value)}
                placeholder="ciudad de residencia"
                type="text"
                required={true}
              />
            </div>
          </form>

          <h2 id="calendar">Calendario</h2>
          <div className="boxcalendar">
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
          <h2 className="selectH2">Tu horario de llegada</h2>
          <div className="card" style={{ width: "90%" }} id="cardSelect">
            <p className="p">
              Tu habitación va a estar lista para el check-in entre las 10:00 AM
              y las 11:00 PM
            </p>
            <p className="p">Indicá tu horario de llegada:</p>
            <Select
              className="select"
              defaultValue={{
                label: (
                  <span className="selectLabel">
                    Seleccionar hora de llegada
                  </span>
                ),
                value: "default",
              }}
              options={hours}
              onChange={selectHour}
              isDisabled={false}
              isSearchable={false}
              isRtl={false}
              menuPlacement="auto"
              required
            />
          </div>
        </div>
        <div className="bookingDatail">
          {product ? (
            <div className="card" style={{ width: " 90%" }}>
              <h2>Detalle de la reserva</h2>
              <img
                src={product.images[0].url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.category.title}</h5>
                <h2 className="card-title"> {product.name} </h2>
                <p className="card-text">
                  {" "}
                  {product.city.name}, {product.city.country}{" "}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {" "}
                  <span className="check">Check in: </span>{" "}
                  <span className="dateCheck"> {checkInDate[0]} </span>{" "}
                </li>
                <li className="list-group-item">
                  {" "}
                  <span className="check">Check out: </span>{" "}
                  <span className="dateCheck">{checkOutDate[0]} </span>{" "}
                </li>
                <li className="list-group-item">
                  {" "}
                  <span className="check">Total: </span>
                  <span className="price">
                    {daysReservation === 0
                      ? priceTotal * 1
                      : priceTotal * daysReservation}
                    USD
                  </span>
                </li>
                <div className={
                    hour === "" || cityUpdate === "" ? "pay" : "payNone"
                  }>Por favor complete los campos de ciudad y hora para realizar su pago </div>
                <li
                  className={
                    hour === "" || cityUpdate === "" ? "paypalNone" : "paypal"
                  }
                >
                 
                </li>
              </ul>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (cityUpdate === "" || hour === "") {
                    MySwal.fire({
                      html: (
                        <strong>
                          Por favor, complete todos los campos requeridos.
                        </strong>
                      ),
                      icon: "warning",
                    });
                  } else {
                    MySwal.fire({
                      html: (
                        <strong>
                          Datos de su reserva en {product.name}:
                          <br />
                          -Check-in: {checkInDate[0]}
                          <br />
                          -Check-out: {checkOutDate[0]}
                          <br/>
                          <br/>
                          Para finalizar la reserva realice el pago por paypal.
                          <br/>
                          <br/>
                          <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AXR5SwlVMqXCALhcydZ4SyBzS4pVkPSWsN5wcOZWZe1d9sdKkDSJ_gN5qRUhDLeNDon6tFlObxtfIJvR",
                    }}
                  >
                    <PayPalButtons
                    className="buttonPay"
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: `${priceTotal}`,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                          createBooking();
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                        </strong>
                      ),
                      icon: "question",
                      showConfirmButton: false,
                      showCancelButton: true,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        createBooking();
                      }
                    });
                  }
                }}
                type="submit"
                className="submit"
              >
                Confirmar reserva
              </button>
            </div>
          ) : null}
        </div>
      </BookingStyle>
    </>
  );
};

export default Booking;
