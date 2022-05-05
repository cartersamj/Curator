const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const ArtController = require('./controllers/artController');

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://admin:ilovemongo@art-curator.l4dzw.mongodb.net/art-curator?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('connected!');
});

app.use(express.json());

app.post('/art/fav', ArtController.favArt, (req, res) => {
  return res.status(200).json(res.locals);
});
app.post('/art/rate', ArtController.rateArt, (req, res) => {
  return res.status(200).json(res.locals);
});

app.get('/art/saved', ArtController.getArt, (req, res) => {
  return res.status(200).json(res.locals);
});

app.get('/api/', (req, res) => {
  return res.status(200).send('you did it great job');
});
// app.use(express.static(path.join(__dirname)));
app.get('/shuffle', (req, res) => {
  res.redirect('/#');
});
app.get('/user', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Server error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT);
