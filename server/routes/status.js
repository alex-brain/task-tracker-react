const express = require('express');
const router = express.Router();
const statusController = require('../controllers/status');

router.get('/', (req, res) => {
  res.send(statusController.getList());
});

module.exports = router;
