import google from 'googlethis';

(async () => {
  const images = await google.image('Ristorante La Brinca Ne', { safe: false });
  console.log(images.slice(0, 3).map(img => img.url));
})();
