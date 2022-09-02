import HeaderProduct from "../HeaderProduct/HeaderProduct"
import { BookingStyle } from "./BookingStyle"

const Booking = () => {

    return (
        <>
            <HeaderProduct />
            <BookingStyle>
                <div>
                    <h2>Completá tus datos</h2>
                    <div class="form">
                        <div class="label">
                            <label htmlFor="">Nombre</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Apellido</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Correo electronico</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label htmlFor="">Ciudad</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div>Chau</div>
            </BookingStyle>

        </>
    )
}

export default Booking