// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes

// Start Server

// Routes
app.get('/', (req, res) => {
    res.send('landing-page');
  });

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});