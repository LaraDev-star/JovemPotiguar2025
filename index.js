const express = require('express');
const app = express();
const PORT = 3000;

// Configurar EJS como template engine (se estiver usando)
app.set('view engine', 'ejs');

// Configurar pasta de arquivos estáticos
app.use(express.static('public'));

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Jovem Potiguar 2025!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});