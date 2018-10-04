const data = require('../data.json');

const priorityController = {
  getList: () => {
    return data.priority;
  }
};

module.exports = priorityController;