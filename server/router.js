var utils = require('./utils'); 
var router = require('express').Router();

// router.get('/questions', utils.get);

router.post('/score', utils.getScore); //need different callback



module.exports = router;