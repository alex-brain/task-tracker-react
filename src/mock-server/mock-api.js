import database from './mock-data';

// It is backend simulator in the frontend
export default {
  getTasks: () => {
    return {
      data: {
        tasks: database.tasks[1]
      }
    }
  }
};