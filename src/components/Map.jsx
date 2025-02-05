import React from "react";
import styles from "./Map.module.css";
// import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  // let lat = searchParams.get("lat");
  // let lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
