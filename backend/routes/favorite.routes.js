const express = require("express");

const { FavoriteModel } = require("../models/favorite.model");

const favoriteRouter = express.Router();


favoriteRouter.post('/',async (req, res) => {
    try {
      const { name, capital, population, flagUrl } = req.body;
      const newFavorite = new FavoriteModel({ name, capital, population, flagUrl });
      await newFavorite.save();
      res.status(201).json(newFavorite);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });