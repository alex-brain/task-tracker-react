import api from '../mock-server/mock-api';

export default {
  login: (login, password) => {
    return api.login(login, password);
  }
};
