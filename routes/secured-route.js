const router = require('express').Router();

const securedController = require('../controllers/secured-controller');

router.get('/', securedController.secured);

module.exports = router; //export para usar no index.
