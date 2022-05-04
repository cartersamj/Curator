const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/api/', (req, res) => {
  return res.status(200).send('you did it great job');
});
app.listen(PORT);
