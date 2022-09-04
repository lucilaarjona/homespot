import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import HeaderProduct from "../HeaderProduct/HeaderProduct"
import { BookingStyle } from "./BookingStyle"
import { CityContext } from "../../context/CityContext"

const Booking = () => {

    const {user} = useContext(UserContext)
    const {citySelected} = useContext(CityContext)

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
                            <input type="email" />
                        </div>
                        <div className="label">
                            <label htmlFor="">Ciudad</label>
                            <input placeholder={citySelected} disabled type="text" />
                        </div>
                    </div>
                </div>

                <div className="container">
             
                <div className="calendar">CALENDARIO</div>
                <div className="select">SELECT</div>
                </div>
             
                <div className="bookingDatail">DETALLE DE LA RESERVA</div>
            </BookingStyle>

        </>
    )
}

export default Booking