import api from '../mock-server/mock-api';

export default {

  getList: () => {
    return api.getTasks();
  }
};
