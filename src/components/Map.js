import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 36.846160,
  lng: 11.099467
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={""}
    >
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
