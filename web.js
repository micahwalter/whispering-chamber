var express = require('express')
	, cons = require('consolidate')
	, site = require('./site')
	, app = express();

// Config 
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.logger());

// General pages
app.get('/', site.index);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});