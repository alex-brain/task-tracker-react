const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

router.get('/', (req, res) => {
  res.send(taskController.getList());
});

router.post('/create', async (req, res) => {
  try {
    const createdTask = await taskController.createOne(req.body);
    res.send(createdTask);
  } catch (e) {
    res.send(e);
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const updatedTask = await taskController.updateOne(parseInt(req.params.id), req.body);
    res.send(updatedTask);
  } catch (e) {
    res.send(e);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedTaskId = await taskController.deleteOne(parseInt(req.params.id));
    console.log('deletedTaskId', deletedTaskId);

    res.send({ id: deletedTaskId });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
