const express = require('express');
const router = express.Router();
const db = require('../models');
const { Post,Section,Quiz } = db;

router.get('/', (req,res) => {
  Post.findAll()
    .then(posts => res.json(posts));
});

router.post('/', (req, res) => {
  let { name,description,image,content } = req.body;
  Post.create({ name,description,image,content})
    .then(post => {
      res.status(201).json(post);
      association(post.id, content)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

function association (postId,content){
  let id = postId
  Section.create({id,content,postId})
}

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id, {
    include:["sections","quizzes"]
  })
    .then(post => {
      console.log(post)
      if(!post) {
        return res.sendStatus(404);
      }
      res.json(post);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.content = req.body.content;
      post.save()
        .then(post => {
          res.json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});



module.exports = router;