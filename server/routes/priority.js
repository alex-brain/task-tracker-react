const express = require('express');
const router = express.Router();
const priorityController = require('../controllers/priority');

router.get('/', (req, res) => {
  res.send(priorityController.getList());
});

module.exports = router;
