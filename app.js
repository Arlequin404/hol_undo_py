// Importa Express
const express = require('express');
const app = express();

// Configura el puerto
const PORT = process.env.PORT || 3000;

// Define una ruta de inicio
app.get('/', (req, res) => {
  res.send("Hola Mundo");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
