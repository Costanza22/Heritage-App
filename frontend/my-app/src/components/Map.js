import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const casarãoIcon = new L.Icon({
  iconUrl: "/icons/casarao.png",
  iconSize: [38, 38],      
  iconAnchor: [19, 38],   
  popupAnchor: [0, -38],  
});
  useEffect(() => {
    fetch("https://heritage-mapper-back.onrender.com/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar locais:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando mapa...</div>;
  if (!places.length) return <div>Nenhum local encontrado.</div>;

  return (
    <MapContainer
  center={[-25.4296, -49.2713]} 
  zoom={14}
  style={{ height: "100vh", width: "100%" }}
>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {places.map((place) => {
        if (!place.lat || !place.lon) return null;

        return (
          <Marker
  key={place.id}
  position={[place.lat, place.lon]}
  icon={casarãoIcon}
>
            <Popup>
  <strong>{place.name}</strong>
  <br />
  <em>{place.category}</em>
  <br />
  {place.description}

  {place.image_url && (
    <div style={{ marginTop: "8px" }}>
      <img
        src={place.image_url}
        alt={place.name}
        style={{
          width: "200px",
          borderRadius: "8px",
          marginTop: "6px"
        }}
      />
    </div>
  )}
</Popup>

          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
