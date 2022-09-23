import React, {useEffect, useState, useContext} from "react";
import DateRangeComp from "./DateRangeComp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { SearcherStyled } from "./SearcherStyled.js";
import axiosHelper from "../../helper/axiosHelper.js";
import {CityContext} from '../../context/CityContext'

function Searcher() {

  const [citySearch, setCitySearch] = useState("")
  const handSelectChange = ({ value }) => {
    setCitySearch(value);
  };


  const [city, setCity] = useState([])
  const loadData = () => {
    axiosHelper.get("/city")
      .then(res => {
        setCity(res.data)
      })
  };
  useEffect(loadData,[])

  const {setCitySelected} = useContext(CityContext)

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
                value: `${city.name},${city.country}`,
              }))}
              onChange={handSelectChange}
            />
          </div>
          <DateRangeComp  className="Calendar" />
          <button type="button" onClick={() => setCitySelected(citySearch) } className="search">
            Buscar
          </button>
        </form>
      </section>
    </SearcherStyled>
  );
}

export { Searcher };
