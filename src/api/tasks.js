import tasks from '../mock-server/mock-api';

export default {

  getList: () => {
    return tasks.getTasks();
  }

};
