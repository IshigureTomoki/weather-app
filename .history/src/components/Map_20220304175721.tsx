import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// add icons
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export const Map = (props: any) => {
  // marker setting
  let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  const { currentPosition } = props;
  const position = currentPosition;
  const [zoom, setZoom] = useState(5);
  const mar

  return (
    <div>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "50vh", width: "400px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {position.lat},{position.lon}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
