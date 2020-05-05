// *** main dependencies *** //
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const port =process.env.PORT||8070
// *** acces permission *** //
var cors = require('cors')

// *** routes *** //
var routes = require('./routes/index.js');

// *** express instance *** //
var app = express();

// *** config file *** //
var config = require('./Dbconfig/_config');

// *** mongoose *** ///
mongoose.connect(config.url2, function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.url2);
  }
});

// *** config middleware *** //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(cookieParser())
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));


// *** main routes *** //
app.use('/', routes);
app.get("/",(req,res)=> {
  res.send("hello")
})
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:3000/');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

// *** server config *** //
var server   = http.createServer(app);
server.listen(port, function() {
  console.log("Node server running on http://localhost:8050");
});

module.exports = server;
