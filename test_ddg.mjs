import { image_search } from 'duckduckgo-images-api';

(async () => {
  try {
    const results = await image_search({ query: "La Brinca ristorante Ne", moderate: true });
    console.log(results.slice(0, 3).map(r => r.image));
  } catch (e) {
    console.log("Error:", e);
  }
})();
