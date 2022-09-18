import React, { useEffect, useState } from "react";
import axiosHelper from "../../../helper/axiosHelper";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HouseIcon from "@mui/icons-material/House";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import CabinIcon from "@mui/icons-material/Cabin";
import { useContext } from "react";
import { NewProductContext } from "../../../context/NewProduct";
import { useNavigate } from "react-router-dom";
import Select from "react-select";


const Intro = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const {setCitySelected, setCategorySelected, setName, setDirection, setDescription } =
    useContext(NewProductContext);


    const handSelectChange = ({ value }) => {
      setCitySelected(value);
    };

  const [city, setCity] = useState([])
  const loadCities = () => {
    axiosHelper.get("/city")
      .then(res => {
        setCity(res.data)
      })
  };
  useEffect(loadCities,[])

  const loadData = () => {
    axiosHelper.get("/category").then((res) => {
      setCategories(res.data);
    });
  };
  useEffect(loadData, []);

  return (
    <div>
      <div> </div>
      <div>
        <div>
          {categories ? (
            <section className="productList">
              {categories.map((category, index) => {
                return (
                  <label htmlFor={category.title} key={index}>
                    <input
                      type="radio"
                      id={category.title}
                      name="category"
                      value={category.id}
                      onClick={() => {
                        setCategorySelected(category.id);
                      }}
                    />
                    {category.title === "Departamento" ? (
                      <>
                        <div>
                          <ApartmentIcon />
                        </div>
                        <div>{category.title}</div>
                      </>
                    ) : null}
                    {category.title === "Cabaña" ? (
                      <>
                        <div>
                          <CabinIcon />
                        </div>
                        <div>{category.title}</div>
                      </>
                    ) : null}
                    {category.title === "Casa" ? (
                      <>
                        <div>
                          <HouseIcon />
                        </div>{" "}
                        <div>{category.title}</div>
                      </>
                    ) : null}
                    {category.title === "Casa de playa" ? (
                      <>
                        <div>
                          <HouseboatIcon />
                        </div>{" "}
                        <div>{category.title}</div>
                      </>
                    ) : null}
                  </label>
                );
              })}
            </section>
          ) : null}
        </div>
        <div>
          <label htmlFor="">
            Nombre de la propiedad
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
        <div>Seleccione la ubicacion de la propiedad</div>
        <Select
              defaultValue={{
                label: (
                  <>
                    <span className="selectLabel">¿A dónde vamos? </span>
                  </>
                ),
                value: "default",
              }}
              options={city.map((city) => ({
                label: (
                  <div className="selectLocation">
                    <div className="cities">
                      <span> {city.name}, </span>{" "}
                      <span className="country"> {city.country}</span>
                    </div>
                  </div>
                ),
                value: city.id,
              }))}
              onChange={handSelectChange}
            />
        </div>
        <div>
          <label htmlFor="">
            Escriba la direccion de la propiedad
            <input
              type="text"
              id="name"
              onChange={(e) => setDirection(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Descripcion del lugar (Sea lo más claro posible)
            <textarea
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button onClick={(() => navigate("/newProduct/view2"))}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export { Intro };
