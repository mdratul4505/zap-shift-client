import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Coverage = () => {
  const position = [23.6850, 90.3563];
  return (
    <div className="bg-white shadow-2xl p-20 rounded-3xl my-30">
      <div>
        <h className="text-5xl text-secondary font-bold">
          We are available in 64 districts
        </h>
      </div>
      <div className="w-full h-200 border border-gray-100">
        <MapContainer 
        center={position} 
        zoom={8} 
        scrollWheelZoom={false}
        className="h-200">
            
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
