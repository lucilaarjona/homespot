import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosHelper from "../../helper/axiosHelper"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const HeaderProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    // const loadData = async () => {
    //     try { await axiosHelper.get(`/product/${id}`).then((res) => { setProduct(res.data) }) }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => { loadData() }, [loadData])

    useEffect(() => {
        const loadData = async () => {
            try {
                await axiosHelper.get(`/product/${id}`).then((res) => {
                    setProduct(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        };
        loadData();
    }, [id]);
    // console.log(product);

    return (
        <>
            <header>
                <div className="title">
                    {/* <div id="categorie">{product.category.title}</div> */}

                    <div id="name">{product.name}</div>
                </div>
                <div className="back">
                    <Link to="/">
                        <ArrowBackIcon className="iconBack" />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default HeaderProduct