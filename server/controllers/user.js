const data = require('../data.json');

const userController = {

  login: (login, password) => {
    const user = data.users.find(item => item.login === login);
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
      user: {
        login: user.login,
        id: user.id
      }
    };
  }
};

module.exports = userController;