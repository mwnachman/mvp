var controller = require('./controller'); 
var router = require('express').Router();


// router.get('/questions', controller.get);

router.post('/score', controller.post); 

// router.options('/score', controller.options);


module.exports = router;