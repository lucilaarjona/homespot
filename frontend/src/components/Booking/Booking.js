import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import HeaderProduct from "../HeaderProduct/HeaderProduct";
import { BookingStyle } from "./BookingStyle";
import { CityContext } from "../../context/CityContext";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import axiosHelper from "../../helper/axiosHelper";
import Select from "react-select";
import swal from "sweetalert";

const Booking = () => {
    const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { citySelected } = useContext(CityContext);
  // Calendario
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

  const startDate = range[0].startDate.toLocaleString();
  const checkInDate = startDate.split(",");

  const endDate = range[0].endDate.toLocaleString();
  const checkOutDate = endDate.split(",");

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
  // console.log(hour);
  return (
    <>
      <HeaderProduct />
      <BookingStyle>
        <div className="left">
          <h2 className="titleForm">Completá tus datos</h2>
          <form action="" className="form">
            <div className="label">
              <label htmlFor="">Nombre</label>
              <input placeholder={user.name} disabled type="text" />
            </div>
            <div className="label">
              <label htmlFor="">Apellido</label>
              <input placeholder={user.surname} disabled type="text" />
            </div>
            <div className="label">
              <label htmlFor="">Correo electronico</label>
              <input type="email" placeholder={user.email} disabled />
            </div>
            <div className="label">
              <label htmlFor="">Ciudad</label>
              <input placeholder={citySelected} type="text" required />
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
              </ul>
              <button
                onClick={() => {
                  hour === ""
                    ? swal({
                        title: "No hemos podido registrar tu reserva",
                        icon: "warning",
                      })
                    : swal({
                        title: "Quieres confirmar tu reserva?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          swal("Tu reserva ha sido confirmada con exito!, revisa tu correo electronico", {
                            icon: "success",
                          })
                          navigate("/");
                        } else {
                          swal("Tu reserva ha sido cancelada");
                        }
                      });
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
