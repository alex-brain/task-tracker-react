import http from '../utils/http';

export default {
  login: (login, password) => {
    return http.post('/users/login', {login, password});
  }
};
