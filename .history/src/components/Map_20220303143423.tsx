import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = () => {
  const [position, setPosition] = useState({
    lat: 35.69,
    lng: 139.692,
  });
  const [zoom, setZoom] = useState(14);

  return (
    <div>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "50vh", width: "80vh" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
