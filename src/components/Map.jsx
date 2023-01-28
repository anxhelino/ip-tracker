import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { useContext } from "react";
import IpContext from "../context/IpContext";
import Loading from "./Loading";

import React from "react";

// const MyMap = () => {
//     const map = useMap();

// }

function Maps() {
  const { info, loading } = useContext(IpContext);

  const lat = info.location?.lat;
  const lng = info.location?.lng;
  console.log(loading);
  return loading ? (
    <Loading />
  ) : (
    <MapContainer
      className="h-2/3  z-0  xs:-mt-80 sm:-mt-72 md:-mt-20 lg:-mt-10 xl:-mt-10 "
      center={[lat, lng]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
