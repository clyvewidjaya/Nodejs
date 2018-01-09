const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Clyve Widjaya',
    age: 20
  }, {
    name: 'Calvyn Widjaya',
    age: 22
  }, {
    name: 'Agus Widjaya',
    age: 55
  }]);
});

app.listen(3000);

module.exports.app = app;
