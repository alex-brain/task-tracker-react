const data = require('../data.json');

const statusController = {
  getList: () => {
    return data.statuses;
  }
};

module.exports = statusController;