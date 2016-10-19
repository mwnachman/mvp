var controller = require('./controller'); 
var router = require('express').Router();


router.post('/score', controller.post); 


module.exports = router;