import database from './mock-data';

// It is backend simulator in the frontend
export default {
  login: (login, password) => {
    const user = database.users.find(item => item.login === login);
    if (!user) {
      return {
        error: {
          login: 'Такой пользователь не существует!'
        }
      };
    }
    if (user.password !== password) {
      return {
        error: {
          password: 'Неверный пароль!'
        }
      };
    }
    return {
      data: {
        user: {
          login: user.login,
          id: user.id
        }
      }
    };
  },
  getTasks: () => {
    return {
      data: {
        tasks: database.tasks[1]
      }
    }
  },
  getPriority: () => {
    return {
      data: database.priority
    }
  },
};