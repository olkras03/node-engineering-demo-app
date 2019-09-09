var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var post_controller = require('../controllers/post');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', post_controller.test);


router.post('/', post_controller.post_create);

router.get('/:id', post_controller.post_details);

router.put('/:id', post_controller.post_update);

router.delete('/:id', post_controller.post_delete);


module.exports = router;