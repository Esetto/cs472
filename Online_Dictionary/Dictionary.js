var express = require('express');

var app = express();
var port = 5500


app.use(function (req, res, next) {

 
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})


app.listen(port, () => console.log("Server start on port: " + port))

app.get('/', (req, res) => {

  var word= req.query.word;

  var query= require('./word');
  query.queryWord(word, res);
  
})