import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';

// Exporting mapping logic here as well for convenience
export const CATEGORIES = {
  MANGIARE: "mangiare",
  BERE: "bere",
  STABILIMENTO: "stabilimento balneare"
};

export const PRICES = {
  LOW: "€",
  MEDIUM: "€€",
  HIGH: "€€€"
};

export const places = [
  {
    id: "la-brinca",
    name: "La Brinca",
    city: "Ne",
    category: CATEGORIES.MANGIARE,
    price: PRICES.MEDIUM,
    description: "Miglior trattoria di Liguria",
    lat: 44.3512,
    lng: 9.3981,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.597652758252!2d9.39626241552554!3d44.3512399791039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4bd2d267b9d53%3A0x158535b32798e7a2!2sLa%20Brinca!5e0!3m2!1sit!2sit!4v1718664188200!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJU7lnJtm81BIRoueYJ7M1hRY",
    images: ["/images/la-brinca_1.jpg","/images/la-brinca_2.jpg","/images/la-brinca_3.jpeg","/images/la-brinca_4.jpg"]
  },
  {
    id: "sa-pesta",
    name: "Sa Pesta",
    city: "Genova",
    category: CATEGORIES.MANGIARE,
    price: PRICES.LOW,
    description: "Storica sciamadda genovese, famosa per la torta pasqualina e farinata.",
    lat: 44.4071,
    lng: 8.9339,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.6963283259976!2d8.9317582!3d44.4071537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343de03812b85%3A0xad2b8c7ab3c66246!2sSa%20Pesta!5e0!3m2!1sit!2sit!4v1718664188201!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJhSuBA95D0xIRRmLGs3qMrSo",
    images: ["/images/sa-pesta_1.jpg","/images/sa-pesta_2.jpg","/images/sa-pesta_3.jpg","/images/sa-pesta_4.jpg"]
  },
  {
    id: "trattoria-delle-grazie",
    name: "Trattoria delle Grazie",
    city: "Genova",
    category: CATEGORIES.MANGIARE,
    price: PRICES.MEDIUM,
    description: "Locale caratteristico nel centro storico con ottimi piatti di pesce e pesto.",
    lat: 44.4068,
    lng: 8.9295,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343de403232db%3A0x51ca7b4b282840bb!2sTrattoria%20delle%20Grazie!5e0!3m2!1sit!2sit!4v1718664188202!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJ2zLlQN5D0xIRu0AwKEtzylE",
    images: ["/images/trattoria-delle-grazie_1.jpg","/images/trattoria-delle-grazie_2.jpg","/images/trattoria-delle-grazie_3.jpg","/images/trattoria-delle-grazie_4.jpg"]
  },
  {
    id: "zimino",
    name: "Zimino",
    city: "Genova",
    category: CATEGORIES.MANGIARE,
    price: PRICES.LOW,
    description: "Posticino intimo, piatti di mare eccellenti in salsa ligure.",
    lat: 44.4045,
    lng: 8.9321,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3434745c66e0d%3A0xc19601ff19acaf8c!2sZimino!5e0!3m2!1sit!2sit!4v1718664188203!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJDW7GRedD0xIRjO-sGf8BlsE",
    images: ["/images/zimino_1.jpg","/images/zimino_2.jpg","/images/zimino_3.jpeg","/images/zimino_4.jpg"]
  },
  {
    id: "antica-sciamadda",
    name: "Antica Sciamadda",
    city: "Genova",
    category: CATEGORIES.MANGIARE,
    price: PRICES.LOW,
    description: "Friggitoria storica di Genova.",
    lat: 44.4082,
    lng: 8.9315,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343de1f6a62cf%3A0x5dbab067e54a02eb!2sAntica%20Sciamadda!5e0!3m2!1sit!2sit!4v1718664188204!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJz2JqH95D0xIR6wJK5WcBul0",
    images: ["/images/antica-sciamadda_1.jpg","/images/antica-sciamadda_2.jpg","/images/antica-sciamadda_3.jpg","/images/antica-sciamadda_4.jpg"]
  },
  {
    id: "antica-friggitoria-carega",
    name: "Antica Friggitoria Carega",
    city: "Genova",
    category: CATEGORIES.MANGIARE,
    price: PRICES.LOW,
    description: "Ottima friggitoria, specialità liguri fritte a regola d'arte.",
    lat: 44.4121,
    lng: 8.9261,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3434000c027e7%3A0xb9eeb8ee17754a1f!2sAntica%20Friggitoria%20Carega!5e0!3m2!1sit!2sit!4v1718664188205!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJ5ycAQOFD0xIRH0p1F-4rebg",
    images: ["/images/antica-friggitoria-carega_1.jpg","/images/antica-friggitoria-carega_2.JPG","/images/antica-friggitoria-carega_3.jpg","/images/antica-friggitoria-carega_4.jpg"]
  },
  {
    id: "ristorante-ulivo",
    name: "Ristorante L'Ulivo",
    city: "Lavagna",
    category: CATEGORIES.MANGIARE,
    price: PRICES.MEDIUM,
    description: "Ottimo ristorante a Lavagna per piatti tradizionali e di mare.",
    lat: 44.3129,
    lng: 9.3456,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d497f6ccdcceef%3A0x48480473d888bcce!2sRistorante%20L'Ulivo!5e0!3m2!1sit!2sit!4v1718664188206!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJ-eNczPaX1BIRzryI2HMESHY",
    images: ["/images/ristorante-ulivo_1.jpg","/images/ristorante-ulivo_2.jpg","/images/ristorante-ulivo_3.png","/images/ristorante-ulivo_4.jpg"]
  },
  {
    id: "il-bistrotto",
    name: "Il Bistrotto",
    city: "Bogliasco",
    category: CATEGORIES.BERE,
    price: PRICES.MEDIUM,
    description: "Ideale per bere qualcosa con vista a Bogliasco.",
    lat: 44.3789,
    lng: 9.0682,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d35c4d2a92f84b%3A0xc331b10a45ed773d!2sIl%20Bistrotto!5e0!3m2!1sit!2sit!4v1718664188207!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJS_iSKk1c0xIRPXfsRQqxMcM",
    images: ["/images/il-bistrotto_1.jpg","/images/il-bistrotto_2.jpg","/images/il-bistrotto_3.png","/images/il-bistrotto_4.jpg"]
  },
  {
    id: "osteria-da-drin",
    name: "Osteria da Drin",
    city: "Sori",
    category: CATEGORIES.MANGIARE,
    price: PRICES.LOW,
    description: "Osteria tipica a Sori, ambiente informale e cucina casalinga.",
    lat: 44.3732,
    lng: 9.1067,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d35e948bd3264d%3A0x9905bdp9f43ce00!2sOsteria%20da%20Drin!5e0!3m2!1sit!2sit!4v1718664188208!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJTSbTi5Re0xIRgADOQ6a9BZk",
    images: ["/images/osteria-da-drin_1.jpg","/images/osteria-da-drin_2.jpg","/images/osteria-da-drin_3.jpg","/images/osteria-da-drin_4.jpg"]
  },
  {
    id: "bagni-sillo",
    name: "Bagni Sillo",
    city: "Sori",
    category: CATEGORIES.STABILIMENTO,
    price: PRICES.HIGH,
    description: "Per andare al mare. Caro ma bellissimo.",
    lat: 44.3721,
    lng: 9.1023,
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.7064283259976!2d8.9273582!3d44.4068537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d35e796e142d87%3A0x4a203fdf401595bf!2sBagni%20Sillo!5e0!3m2!1sit!2sit!4v1718664188209!5m2!1sit!2sit",
    googleMapsLink: "https://www.google.com/maps/place/?q=place_id:ChIJhy0Ubnle0xIRv5UVQB--IEo",
    images: ["/images/bagni-sillo_1.jpg","/images/bagni-sillo_2.jpg","/images/bagni-sillo_3.jpg","/images/bagni-sillo_4.jpg"]
  }
];
