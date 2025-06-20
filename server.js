const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/wget', (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).send('URL não fornecida.');

  const command = `wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --ignore-tags=nofollow --execute robots=off "${url}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar wget: ${stderr}`);
      return res.status(500).send(`Erro ao executar wget: ${stderr}`);
    }
    res.send(`Download completo de: ${url}`);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
