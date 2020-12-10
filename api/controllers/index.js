const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
const quizzesController = require('./quizzess.js');
const videosController = require('./videos.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/quizzes',quizzesController);
router.use('/videos',videosController);
router.use('/application-configuration', appConfigController);


module.exports = router;