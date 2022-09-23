import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import axiosHelper from "../../helper/axiosHelper"
import { Link } from "react-router-dom"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { HeaderProductStyle } from "./HeaderProductStyle"

const HeaderProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState("");

    useEffect(() => {
        const loadData = async () => {
            await axiosHelper.get(`/product/${id}`).then((res) => {
                setProduct(res.data);
            });
        };
        loadData();
    }, [id]);
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            {product ? (
                <HeaderProductStyle>
                    <header>
                        <div className="title">
                            <div id="categorie">{product.category.title}</div>
                            <div id="name">{product.name}</div>
                        </div>
                        {(pathname === `/product/${id}/booking`) ? (<div className="back">
                            <Link to={`/product/${id}`}>
                                <ArrowBackIcon className="iconBack" />
                            </Link>
                        </div>) : (<div className="back">
                            <Link to={`/`}>
                                <ArrowBackIcon className="iconBack" />
                            </Link>
                        </div>)}
                    </header>
                    <section>
                        <div className="ubication">
                            <div>
                                <LocationOnIcon className="iconLocation" />
                                {product.city.name}, {product.city.country}
                            </div>
                        </div>
                    </section>
                </HeaderProductStyle>

            ) : null}
        </>
    )
}

export default HeaderProduct