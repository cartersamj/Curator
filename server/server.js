const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

express.static(path.join(__dirname, 'build'));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(PORT);
