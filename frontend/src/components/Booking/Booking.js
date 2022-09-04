import HeaderProduct from "../HeaderProduct/HeaderProduct"
import { BookingStyle } from "./BookingStyle"

const Booking = () => {

    return (
        <>
            <HeaderProduct />
            <BookingStyle>
                <div>
                    <h2>Completá tus datos</h2>
                    <div className="form">
                        <div className="label" >
                            <label>Nombre</label>
                            <input type="text" disabled />
                        </div>
                        <div  className="label">
                            <label>Apellido</label>
                            <input type="text"  disabled/>
                        </div>
                        <div  className="label" >
                            <label>Correo electronico</label>
                            <input type="email" disabled />
                        </div>
                        <div  className="label">
                            <label>Ciudad</label>
                            <input type="text"  required/>
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