var express = require('express')
, app = express();

app.use(express.static('public'));

app.get('/blocks', function(req, res) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  res.json(blocks);
});

app.listen(3000);
