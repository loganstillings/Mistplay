var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, './node_modules')));
app.use(bp.json());

require('./server/routes/routes.js')(app);
app.listen(8000);
