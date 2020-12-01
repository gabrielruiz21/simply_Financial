const express = require('express');
const router = express.Router();
const db = require('../models');
const {Quiz} = db;

router.get('/', (req,res) => {
  Quiz.findAll()
    .then(quizs => res.json(quizs));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Quiz.findByPk(id,{
    include:["quizSections"]
  })
    .then(quiz => {
      if(!quiz) {
        return res.sendStatus(404);
      }
      res.json(quiz);
    });
});

module.exports = router;