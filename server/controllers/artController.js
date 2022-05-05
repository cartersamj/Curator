const { restart } = require('nodemon');
const Art = require('../models/artModel');

const ArtController = {
  async favArt(req, res, next) {
    try {
      const {
        artistDisplayName,
        title,
        primaryImage,
        medium,
        artistBeginDate,
        objectDate,
        creditLine,
        rating,
        favorite,
      } = req.body;
      const data = await Art.updateOne(
        { artistDisplayName, title },
        {
          artistDisplayName,
          title,
          primaryImage,
          medium,
          artistBeginDate,
          objectDate,
          creditLine,
          rating,
          favorite: true,
        },
        { upsert: true }
      );

      res.locals.data = data;
      res.locals.data.favorite = favorite;
      return next();
    } catch (err) {
      return next({
        log: 'error in ArtController.favArt',
        status: 418,
        message: { err: err },
      });
    }
  },

  async rateArt(req, res, next) {
    try {
      const {
        artistDisplayName,
        title,
        primaryImage,
        medium,
        artistBeginDate,
        objectDate,
        creditLine,
        rating,
        userRating,
      } = req.body;
      const data = await Art.updateOne(
        { artistDisplayName, title },
        {
          artistDisplayName,
          title,
          primaryImage,
          medium,
          artistBeginDate,
          objectDate,
          creditLine,
          rating,
          userRating,
        },
        { upsert: true }
      );

      res.locals.data = data;
      res.locals.data.userRating = userRating;
      return next();
    } catch (err) {
      return next({
        log: 'error in ArtController.rateArt',
        status: 418,
        message: { err: err },
      });
    }
  },
  async getArt(req, res, next) {
    try {
      const gallery = await Art.find({})
      res.locals.gallery = gallery;
      return next();
    }
    catch (err) {
      return next({
        log: 'error in ArtController.getArt',
        status: 418,
        message: { err: err },
      })
    }
  }
};

module.exports = ArtController;
