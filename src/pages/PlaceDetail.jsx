import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, ExternalLink } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { places } from '../data';
import L from 'leaflet';

const customMarkerIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="
    background-color: var(--primary); 
    border: 2px solid var(--text-color); 
    width: 20px; 
    height: 20px; 
    border-radius: 50%; 
    box-shadow: 3px 3px 0px var(--text-color);
  "></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -14]
});

export default function PlaceDetail() {
  const { id } = useParams();
  const place = places.find(p => p.id === id);

  if (!place) {
    return <Navigate to="/" />;
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} style={{marginRight: '8px'}} /> Torna alla lista
      </Link>

      <div className="detail-header">
        <h1 className="detail-title">{place.name}</h1>
        <div className="detail-info">
          <span className="place-category">{place.category}</span>
          <span className="place-price">{place.price}</span>
          <span className="place-city" style={{marginTop: 0}}>
            <MapPin size={20} /> {place.city}
          </span>
        </div>
      </div>

      <div className="detail-comment">
        "{place.description}"
      </div>

      <div className="detail-content">
        <div className="detail-media">
          <img 
            src={place.images[0]} 
            alt={place.name} 
            className="detail-photo" 
          />
          <a 
            href={place.googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{width: '100%'}}
          >
            <ExternalLink size={18} style={{marginRight: '8px'}} /> Apri in Google Maps
          </a>
        </div>
        
        <div className="detail-map">
          <MapContainer 
            center={[place.lat, place.lng]} 
            zoom={15} 
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', zIndex: 1 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[place.lat, place.lng]} icon={customMarkerIcon}>
              <Popup>{place.name}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {place.images.length > 1 && (
        <div className="gallery-section">
          <h2 className="filter-title" style={{fontSize: '1.5rem', marginTop: '2rem'}}>Galleria Fotografica</h2>
          <div className="gallery-grid">
            {place.images.slice(1).map((imgUrl, index) => (
              <img 
                key={index}
                src={imgUrl} 
                alt={`${place.name} foto ${index + 1}`} 
                className="gallery-photo"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
