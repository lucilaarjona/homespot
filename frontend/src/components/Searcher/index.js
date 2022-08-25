import React, {useEffect, useState} from "react";
import DateRangeComp from "./DateRangeComp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { SearcherStyled } from "./SearcherStyled.js";
import axios from "axios"

function Searcher() {
  const handSelectChange = ({ value }) => {
    console.log(value);
  };

  const [city, setCity] = useState([])
  const loadData = () => {
    axios.get("http://18.118.83.144:8080/city")
      .then(res => {
        setCity(res.data)
      })
  };

  useEffect(loadData,[])

  return (
    <SearcherStyled>
      <section className="searcher">
        <h1>Busca ofertas en departamentos, casas y mucho más</h1>
        <form>
          <div className="location">
            <Select
              defaultValue={{
                label: (
                  <>
                    <FontAwesomeIcon
                      className="iconLocation"
                      icon={faMagnifyingGlassLocation}
                    />
                    <span className="selectLabel">¿A dónde vamos? </span>
                  </>
                ),
                value: "default",
              }}
              options={city.map((city) => ({
                label: (
                  <div className="selectLocation">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    </div>
                    <div className="cities">
                      <span> {city.name} </span>{" "}
                      <span className="country"> {city.country}</span>
                    </div>
                  </div>
                ),
                value: city.name,
              }))}
              onChange={handSelectChange}
            />
          </div>
          <DateRangeComp className="Calendar" />
          <button disabled className="search">
            Buscar
          </button>
        </form>
      </section>
    </SearcherStyled>
  );
}

export { Searcher };
