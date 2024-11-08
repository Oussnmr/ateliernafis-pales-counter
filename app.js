const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Compteur Pales - Atelier Nafis');
});

// Laissez une place pour les routes API Shopify et les webhooks

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});