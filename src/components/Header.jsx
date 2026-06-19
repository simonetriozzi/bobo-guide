import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>BOBO Guide</h1>
      </Link>
      <div className="header-subtitle">
        I posti che Bobo consiglia
      </div>
    </header>
  );
}
