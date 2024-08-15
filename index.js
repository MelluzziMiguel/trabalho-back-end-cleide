const express = require('express');
const server = express();
const port = 3000;

// Rota GET para retornar uma mensagem de boas-vindas
server.get('/cliente', (req, res) => {
  return res.json({cliente: 'Miguel Lindão!'});
});

// Inicia o servidor
server.listen(3000, () => {
  console.log(`API rodando em http://localhost:${port}`);
});