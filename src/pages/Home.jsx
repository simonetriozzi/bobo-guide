import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Map as MapIcon, List, Filter } from 'lucide-react';
import { places, CATEGORIES, PRICES } from '../data';
import PlaceCard from '../components/PlaceCard';

// Remove default icon fix and replace with custom flat design icon
const customMarkerIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="
    background-color: var(--primary); 
    border: 2px solid var(--text-color); 
    width: 20px; 
    height: 20px; 
    border-radius: 50%; 
    box-shadow: 3px 3px 0px var(--text-color);
    transition: transform 0.2s;
  "></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -14]
});

export default function Home() {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [activeCategory, setActiveCategory] = useState(null);
  const [activePrice, setActivePrice] = useState(null);

  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      const matchCategory = activeCategory ? place.category === activeCategory : true;
      const matchPrice = activePrice ? place.price === activePrice : true;
      return matchCategory && matchPrice;
    });
  }, [activeCategory, activePrice]);

  const toggleCategory = (cat) => {
    setActiveCategory(prev => prev === cat ? null : cat);
  };

  const togglePrice = (price) => {
    setActivePrice(prev => prev === price ? null : price);
  };

  return (
    <div className="home-page">
      <div className="filters-section">
        <div className="filter-group">
          <div className="filter-title">Tipo di locale</div>
          <div className="filter-buttons">
            {Object.values(CATEGORIES).map(cat => (
              <button 
                key={cat}
                className={`btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => toggleCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <div className="filter-title">Fascia di prezzo</div>
          <div className="filter-buttons">
            {Object.values(PRICES).map(price => (
              <button 
                key={price}
                className={`btn ${activePrice === price ? 'active' : ''}`}
                onClick={() => togglePrice(price)}
              >
                {price}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="view-toggle">
        <button 
          className={`btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          <List size={18} style={{marginRight: '8px'}}/> Lista
        </button>
        <button 
          className={`btn ${viewMode === 'map' ? 'active' : ''}`}
          onClick={() => setViewMode('map')}
        >
          <MapIcon size={18} style={{marginRight: '8px'}}/> Mappa
        </button>
      </div>

      {viewMode === 'list' ? (
        <div className="place-grid">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map(place => (
              <PlaceCard key={place.id} place={place} />
            ))
          ) : (
            <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '2rem', border: '2px solid var(--text-color)'}}>
              Nessun locale trovato con i filtri selezionati.
            </div>
          )}
        </div>
      ) : (
        <div className="map-container-wrapper">
          <MapContainer 
            center={[44.37, 9.0]} // Center around Liguria (Genova/Sori area)
            zoom={10} 
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {filteredPlaces.map(place => (
              <Marker 
                key={place.id} 
                position={[place.lat, place.lng]}
                icon={customMarkerIcon}
              >
                <Popup>
                  <div>
                    <strong>{place.name}</strong><br/>
                    {place.category} - {place.price}<br/>
                    <Link to={`/place/${place.id}`} style={{color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '5px'}}>
                      Vedi dettagli &rarr;
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </div>
  );
}
