import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = ({data}) => {

  const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCTkrc-Q24MXY0y3KNPyDDijJUjVDkjeY4"
      })

  const mapStyles = {
    height: "50vh",
    width: "80%",
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
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
