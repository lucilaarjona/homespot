import React, { useState } from "react";
import DateRangeComp from "./DateRangeComp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";
import cities from "./cities.json";
import Select from "react-select";
import {
  SearcherStyled
} from "./SearcherStyled.js";

function Searcher() {
  const handSelectChange = ({ value }) => {
    console.log(value);
  };

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
                      className="icon"
                      icon={faMagnifyingGlassLocation}
                    />
                    <span className="selectLabel">¿A dónde vamos? </span>
                  </>
                ),
                value: "default",
              }}
              options={cities.map((city) => ({
                label: (
                  <div className="selectLocation">
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="icon"
                      />
                    </div>
                    <div className="cities">
                      <span> {city.city} </span>{" "}
                      <span  className="country"> {city.country}</span>
                    </div>
                  </div>
                ),
                value: city.city,
              }))}
              onChange={handSelectChange}
            />
          </div>
          <DateRangeComp className="Calendar" />
          <button className="search">Buscar</button>
        </form>
      </section>
    </SearcherStyled>
  );
}

export { Searcher };
