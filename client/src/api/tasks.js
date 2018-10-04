import http from '../utils/http';

export default {
  getList: () => {
    return http.get('/tasks');
  },
  createOne: (data) => {
    return http.post('/tasks/create', data);
  },
  updateOne: (data) => {
    return http.put(`/tasks/update/${data.id}`, data);
  },
  deleteOne: (id) => {
    return http.delete(`/tasks/delete/${id}`);
  }
};
