import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=bogota&key=AIzaSyCTkrc-Q24MXY0y3KNPyDDijJUjVDkjeY4`;

  useEffect(() => {
    const response = axios(API);
    setMap(response.data.results[0].geometry.location);
  }, [API]);
  return map;
};

export default useGoogleAddress;
