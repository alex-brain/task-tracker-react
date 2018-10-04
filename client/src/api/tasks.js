import http from '../utils/http';

export default {
  getList: (userId) => {
    return http.get('/tasks', {params: {userId}});
  },
  createOne: (data) => {
    return http.post('/tasks/create', data);
  },
  updateOne: (data) => {
    return http.put(`/tasks/update/${data.task.id}`, data);
  },
  deleteOne: (id) => {
    return http.delete(`/tasks/delete/${id}`);
  }
};
