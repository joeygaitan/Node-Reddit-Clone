// Require Libraries
const express = require('express');
const Post = require('./MVC/models/post')

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

// Set db
require('./data/reddit-db');

// Routes

// Start Server

// Routes


require('./MVC/controllers/posts.js')(app);

app.listen(3000, () => {
  console.log('Hello friend ');
});