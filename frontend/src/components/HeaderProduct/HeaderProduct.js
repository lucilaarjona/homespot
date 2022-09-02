import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosHelper from "../../helper/axiosHelper"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

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

    return (
        <>
            {product ? (<header>
                <div className="title">
                    <div >{product.category.title}</div>
                    <div id="name">{product.name}</div>
                </div>
                <div className="back">
                    <Link to={`/product/${id}`}>
                        <ArrowBackIcon className="iconBack" />
                    </Link>
                </div>
            </header>):null}
        </>
    )
}

export default HeaderProduct