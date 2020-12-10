const express = require('express');
const router = express.Router();
const db = require('../models');
const {Video} = db;

router.get('/', (req,res) => {
  Video.findAll()
    .then(videos => res.json(videos));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Video.findByPk(id)
    .then(video => {
      if(!video) {
        return res.sendStatus(404);
      }
      res.json(video);
    });
});

module.exports = router;