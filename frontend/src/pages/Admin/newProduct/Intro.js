import React, { useEffect, useState } from "react";
import axiosHelper from "../../../helper/axiosHelper";
import { useContext } from "react";
import { NewProductContext } from "../../../context/NewProduct";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { IntroS, BoxIntro } from "./IntroStyled";



const Intro = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const {setCitySelected, setCategorySelected, setName, setDirection, setDescription, name } =
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
    <BoxIntro>
      <div className="left"></div>
      
    <IntroS>
      <div>
      <div><h2>¿En qué tipo de espacio vas a hospedar?</h2> </div>
        <div>
          {categories ? (
            <section className="productList">
              {categories.map((category, index) => {
                return (
                  
                  
                    <label
                    key={index}
                     className="boxProduct"
                     htmlFor={category.title} >
                    <input
                      type="radio"
                      id={category.title}
                      name="category"
                      value={category.id}
                      className="form-check-input"
                      // className="btn-check"
                      
                      onClick={() => {
                        setCategorySelected(category.id);
                      }}
                    />
                    
                   
                 
                    
                    {category.title === "Departamento" ? (
                      <>
                      
                      
                
                        <div className="title">{category.title}</div>
                          {/* <ApartmentIcon className="icon" /> */}
                        <div className="boxImg">
                         <img src={category.urlImage} alt={category.title}/>
                        </div>
                      </>
                    ) : null}
                    {category.title === "Cabaña" ? (
                      <>
                      
                        
                        
                        <div className="title">{category.title}</div>
                        <div className="boxImg">
                       
                          {/* <CabinIcon  className="icon"/> */}
                          <img src={category.urlImage} alt={category.title}/>
                        </div>
                      </>
                    ) : null}
                    {category.title === "Casa" ? (
                      <>
                       
                       
                        <div className="title">{category.title}</div>
                        <div className="boxImg">
                          {/* <HouseIcon className="icon"/> */}
                          <img src={category.urlImage} alt={category.title}/>
                        </div>{" "}
                      </>
                    ) : null}
                    {category.title === "Casa de playa" ? (
                      <>
                      
                        
                        
                          {/* <HouseboatIcon className="icon"/> */}
                        <div className="title">{category.title}</div>
                        <div className="boxImg">
                          <img src={category.urlImage} alt={category.title}/>
                        </div>{" "}
                      </>
                    ) : null}
                  
                  </label>
                 
                  
                );
              })}
            </section>
          ) : null}
        </div>

        <div  className="card" >
        <div>
          <label className="title2" htmlFor="">
            Nombre de la propiedad:
            <input
             className="form-control" 
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
        <div className="title2">Seleccione la ubicación de la propiedad:</div>
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
          <label className="title2" htmlFor="">
            Escriba la dirección de la propiedad:
            <input
            className="form-control" 
              type="text"
              id="name"
              onChange={(e) => setDirection(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="title2" htmlFor="">
            Descripción del lugar (sea lo más claro posible):
            <textarea
            className="form-control" 
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
      </div>
     
        <button onClick={(() => navigate("/newProduct/view2"))}>
         Siguiente
        </button>
      </div>
    </IntroS>
    </BoxIntro>
  );
};

export { Intro };
