import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function PlaceCard({ place }) {
  return (
    <Link to={`/place/${place.id}`} className="place-card">
      <img 
        src={place.images[0]} 
        alt={place.name} 
        className="place-card-img" 
      />
      <div className="place-card-content">
        <div className="place-card-header">
          <h2 className="place-title">{place.name}</h2>
          <span className="place-price">{place.price}</span>
        </div>
        <span className="place-category">{place.category}</span>
        <p className="place-description">{place.description}</p>
        <div className="place-city">
          <MapPin size={16} />
          {place.city}
        </div>
      </div>
    </Link>
  );
}
