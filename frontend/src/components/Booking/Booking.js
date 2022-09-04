import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import HeaderProduct from "../HeaderProduct/HeaderProduct"
import { BookingStyle } from "./BookingStyle"
import { CityContext } from "../../context/CityContext"
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";

const Booking = () => {

    const { user } = useContext(UserContext)
    const { citySelected } = useContext(CityContext)
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
    return (
        <>
            <HeaderProduct />
            <BookingStyle>
                <div>
                    <h2>Completá tus datos</h2>
                    <div className="form">
                        <div className="label">
                            <label htmlFor="">Nombre</label>
                            <input placeholder={user.first_name} disabled type="text" />
                        </div>
                        <div className="label">
                            <label htmlFor="">Apellido</label>
                            <input placeholder={user.last_name} disabled type="text" />
                        </div>
                        <div className="label">
                            <label htmlFor="">Correo electronico</label>
                            <input type="email" disabled />
                        </div>
                        <div className="label">
                            <label htmlFor="">Ciudad</label>
                            <input placeholder={citySelected} type="text" />
                        </div>
                    </div>

                    <div className="container">

                        <div className="calendar">CALENDARIO</div>
                        <DateRange
                            onChange={(item) => setRange([item.selection])}
                            editableDateInputs={false}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={2}
                            direction="horizontal"
                            className="calendarElementDesktop"
                            minDate={date}
                            maxDate={maxDate} />
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
                        <div className="select">SELECT</div>
                    </div>
                </div>
                <div className="bookingDatail">DETALLE DE LA RESERVA
                    {/* <div className="card" style={{ width: " 90%" }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div> */}
                </div>
            </BookingStyle>

        </>
    )
}

export default Booking