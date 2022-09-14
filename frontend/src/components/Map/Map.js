import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = () => {

  const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCTkrc-Q24MXY0y3KNPyDDijJUjVDkjeY4"
      })

  const mapStyles = {
    height: "50vh",
    width: "80%",
  };

  const defaultCenter = {
    lat: 4.60971,
    lng: -74.08175,
  };



  return (
    <>
      {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
      ) : null}
    </>
  );
};

export default Map;
