const fs = require('fs');
const fileUrl = 'server/data.json';
let dataJSON = require('../data.json');

const taskController = {
  getList: () => {
    return {
      tasks: dataJSON.tasks["1"]
    }
  },
  createOne: (data) => {
    dataJSON.tasks["1"].push(data);
    const stringifiedData = JSON.stringify(dataJSON, null, 2);
    return new Promise((resolve, reject) => {
      fs.writeFile(fileUrl, stringifiedData, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  updateOne: (id, data) => {
    dataJSON.tasks["1"] = dataJSON.tasks[1].map(item => {
      if (item.id === id) {
        return data;
      }
      return item;
    });
    const stringifiedData = JSON.stringify(dataJSON, null, 2);
    return new Promise((resolve, reject) => {
      fs.writeFile(fileUrl, stringifiedData, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  deleteOne: (id) => {
    dataJSON.tasks["1"] = dataJSON.tasks[1].filter(item => item.id !== id);
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