import { Link } from "react-router-dom"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { HeaderProductStyle } from "./HeaderProductStyle"
import { NewProductContext } from "../../context/NewProduct";
import { useContext } from "react";

const HeaderProductPreview = () => {

  const {
    categoryName,
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

const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: "30px",
    fontWeight: "bold"
  };
  

    return (
        <>
                <HeaderProductStyle>
                    <header>
                        <div className="title">
                            <div id="categorie">{categoryName}</div>
                            <div id="name">{product.name}</div>
                        </div>
                        <div className="back">
                            <Link to={`/newProduct/preview`}>
                                <ArrowBackIcon className="iconBack" />
                            </Link>
                        </div>
                    </header>
                    <section>
                        <div className="ubication">
                            <div>
                                <LocationOnIcon className="iconLocation" />
                                {citySelected.city}
                            </div>
                        </div>
                    </section>
                   <div style={divStyle}>
                    Vista de prueba, por favor verifique que los datos ingresados son correctos
                   </div> 

                </HeaderProductStyle>
        </>
    )
}

export default HeaderProductPreview