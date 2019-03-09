var express = require('express');
var getContent = require('./views/ssrRenderer.js');
var getHtml = require('./views/prod_template.js');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

var port = process.env.PORT || 8080;

var router = express.Router();
router.get('/', function (req, res) {
    var content = getContent.default();
    var html = getHtml.default(content);
    res.send(html);
});
app.use('/app', router);

app.listen(port);
console.log('Magic happens on port ' + port);