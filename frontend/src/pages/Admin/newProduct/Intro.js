import React, { useEffect, useState } from "react";
import axiosHelper from "../../../helper/axiosHelper";
import { useContext } from "react";
import { NewProductContext } from "../../../context/NewProduct";
import { useNavigate } from "react-router-dom";
import { IntroS, BoxIntro } from "./IntroStyled";



const Intro = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const { setNameCategory, setCategorySelected, setName,  setDescription, description, name } =
    useContext(NewProductContext);

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
      <h2>Publicar producto (1 de 4): </h2> 
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
                      
                      
                    
                      
                      onClick={() => {
                        setCategorySelected(category.id)
                        setNameCategory(category.title)
                        
                        // categorySelected? setCategorySelected(""):  setCategorySelected(category.id)
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

        <div className="box3">
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
          <label className="title2" htmlFor="">
            Descripción del lugar (sea lo más claro posible):
            <textarea
            value={description}
            className="form-control" 
              placeholder="Escribir aquí..."
              maxLength="600"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="boxButton">
     
        <button onClick={(() => navigate("/newProduct/ubication"))}>
         Siguiente
        </button>
        </div>
      </div>
    </IntroS>
    </BoxIntro>
  );
};

export { Intro };
