const express = require('express');

var app = express();

//get needs 2 param, url, and function to run, what to sent back to the request
//localhost:3000/
app.get('/',(req, res) => {
  //res.send('<h1>hello Clyve</h1>');
  res.send({
    name: 'Clyve',
    likes: [
      'Sleeping', 'Eating'
    ],
    age: '25'
  });
});

//localhost:3000/about
app.get('/about',(req,res) => {
  res.send('About Page');
});

//localhost:3000/bad
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});
app.listen(3000);
