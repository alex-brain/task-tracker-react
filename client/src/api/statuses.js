import http from '../utils/http';

export default {
  getList: () => {
    return http.get('/statuses');
  }
};
