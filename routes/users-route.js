const router = require('express').Router();

const usersController = require('../controllers/users-controller');

router.get('/', usersController.list);

router.post('/', usersController.create);


module.exports = router; //export para usar no index.


