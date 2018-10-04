const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/login', (req, res) => {
  res.send(userController.login(req.body.login, req.body.password));
});

module.exports = router;
