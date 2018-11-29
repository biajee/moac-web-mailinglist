const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const email_controller = require('../controllers/email.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', email_controller.test);

router.post('/', email_controller.create);
router.get('/', email_controller.getList);
module.exports = router;