const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const tasks = require('./routes/task');
const users = require('./routes/user');
const priority = require('./routes/priority');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

app.use('/tasks/', tasks);
app.use('/users/', users);
app.use('/priority/', priority);

http.listen(8080, function () {
  console.log('backend listening on *:8080');
});