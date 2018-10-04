const fs = require('fs');
const fileUrl = 'server/data.json';
let dataJSON = require('../data.json');

const taskController = {
  getList: (userId) => {
    return {
      tasks: dataJSON.tasks[userId] || []
    }
  },
  createOne: (data) => {
    if (!dataJSON.tasks[data.userId]) {
      dataJSON.tasks[data.userId] = [];
    }
    dataJSON.tasks[data.userId].push(data.task);
    const stringifiedData = JSON.stringify(dataJSON, null, 2);
    return new Promise((resolve, reject) => {
      fs.writeFile(fileUrl, stringifiedData, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.task);
        }
      });
    });
  },
  updateOne: (id, data) => {
    dataJSON.tasks[data.userId] = dataJSON.tasks[data.userId].map(item => {
      if (item.id === data.task.id) {
        return data.task;
      }
      return item;
    });
    const stringifiedData = JSON.stringify(dataJSON, null, 2);
    return new Promise((resolve, reject) => {
      fs.writeFile(fileUrl, stringifiedData, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.task);
        }
      });
    });
  },
  deleteOne: (id) => {
    for (let userTasks in dataJSON.tasks) {
      dataJSON.tasks[userTasks] = dataJSON.tasks[userTasks].filter(task => {
        return task.id !== id;
      });
    }
    const stringifiedData = JSON.stringify(dataJSON, null, 2);
    return new Promise((resolve, reject) => {
      fs.writeFile(fileUrl, stringifiedData, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(id);
        }
      });
    });
  }
};

module.exports = taskController;