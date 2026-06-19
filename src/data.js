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
    images: ["https://menu.sluurpy.it/foto-piatti/143508/57365973.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/81/54/44/caption.jpg?w=1100&h=1100&s=1","https://www.stupiscitiagenova.it/wp-content/uploads/2025/03/La-Brinca.jpg","https://altissimoceto.com/Image/LaBrinca/brinca-16.jpg"]
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
    images: ["https://menu.sluurpy.it/foto-piatti/146402/286236.jpg","https://i0.wp.com/dearmissfletcher.com/wp-content/uploads/2012/01/sa-pesta-12.jpg","https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2829910291643566544","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/fc/1d/ce/caption.jpg?w=1200&h=1200&s=1"]
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
    images: ["https://lirp.cdn-website.com/03826007/dms3rep/multi/opt/IMG_6041-e2b8bead-640w.jpg","https://ristoranti.giallozafferano.it/images/liguria/ristoranti-genova/il-genovese-5914_3.jpg","https://www.novacircle.com/_next/image?url=https://media.novacircle.com/recommendation_pictures/6596-009233dc-4e9e-484f-a87c-4a06ddd6094e_768.jpg&w=3840&q=75","https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL0IwSGs3SG05Ul9pdXFKRlhUZ09wNEEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0="]
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
    images: ["https://s3-media0.fl.yelpcdn.com/bphoto/-gvvnkEnC0gECZr9C8j5HQ/ls.jpg","https://ristoranti.giallozafferano.it/images/liguria/ristoranti-genova/il-genovese-5914_1.jpg","https://citynews-cibotoday.stgy.ovh/~media/original-hi/55708444121297/angelina-genova.jpg","https://www.mangiarebuono.it/wp-content/uploads/baccala-in-zimino.jpg"]
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
    images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/89/3b/de/antica-sciamadda.jpg?w=1200&h=-1&s=1","https://media-cdn.tripadvisor.com/media/photo-s/0e/db/ef/b4/antica-sciamadda.jpg","https://citynews-genovatoday.stgy.ovh/~media/original-hi/12976766468407/antica-sciamadda.jpg"]
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
    images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c4/35/62/caption.jpg?w=900&h=900&s=1","https://i.ytimg.com/vi/pb0i5v3Ggbs/maxresdefault.jpg","https://www.freaklance.org/frk/_data/i/galleries/economia/bar_locali_ristoranti_Ge/friggitoria_carega_GE/friggitoria_carega_012014-7324-cu_s9999x250.jpg","https://i0.wp.com/dearmissfletcher.com/wp-content/uploads/2014/11/sottoripa-14.jpg?ssl=1"]
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
    images: ["https://www.ilgenovese.com/wp-content/gallery/default_gallery/ristorante.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/570753419.jpg?k=5e138772827d3554617fdf163f7accbfd9262121919db3e9829b9b5727abdb87&o=","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/91/13/3f/caption.jpg?w=1200&h=1200&s=1","https://www.identitagolose.it/public/images/xmedium/dsc08695.jpg"]
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
    images: ["https://skull.it/wp-content/uploads/2025/03/Bistrotto-05.webp","https://www.virtuquotidiane.it/wp-content/uploads/2024/04/Chiara-Sposaro.jpg","https://thefoodzilla.it/wp-content/uploads/2026/01/foto-per-articoli-2026-01-26T133646.583.png","https://skull.it/wp-content/uploads/2025/03/Bistrotto-04.jpeg"]
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
    images: ["https://wips.plug.it/scips/760JkPzyRAfTCvAwEDDIXQ/img.italiaonline.it/0WO5p000000ipOmGAI_2.png?a=rc&w=375&h=154&ssl=1","https://osteriadellacquasanta.com/wp-content/uploads/2014/07/20160501_213001ridd-710x375.jpg","https://images.restopolitan.com/restaurant/osteria-della-piazza/310396/Carousel2.jpg","https://www.ilbai.it/wp-content/uploads/2021/12/osteria_del_bai_genova_cucina_ligure_contemporanea_02-1.webp"]
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
    images: ["https://images.squarespace-cdn.com/content/v1/645e677c64ee331a22189b40/ef3e2b01-6d1e-430f-afc9-3dceb2b43a0c/IMG_3845.JPG","https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=720/2UOKHNYD8iKbz4VfTRYWKUwj54UgCdjpCAbdYgtuQSFaTwKGYS3J","https://menu.sluurpy.it/foto-g/144735/3386331.jpg","https://bagnisirenasml.it/wp-content/uploads/2023/03/Ristorante-Bagni-Sirena-Cena-di-Compleanno-2.jpg"]
  }
];
