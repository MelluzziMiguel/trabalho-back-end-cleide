const express = require('express');
const app = express();
const port = 3000;

// Rota GET para retornar uma mensagem de boas-vindas
app.get('/', (req, res) => {
  res.send('Oii Cleide! Você é demais!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});