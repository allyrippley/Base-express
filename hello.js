var express = require('express')
  , app = express();

app.get('/', function(req, res) {
  res.write('beinvenidos!');
});

app.get('/blocks', function(req, res) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  res.send(blocks);
});

app.get('/build', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
