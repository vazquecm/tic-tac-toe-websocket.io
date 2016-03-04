'use strict';

// these are my dependencies
const express = require('express');
// using the function already created in node-modules
const app = express();
// if env PORT is unavailable use port 3000
const PORT = process.env.PORT || 3000;

// middleware is functions that are executed before getting the response functions - listed first
app.use(express.static('public'));



// default route - when there is a 'get' request, going to respond with something
app.get('/', (request, response) => {
  response.sendFile('index.html');
});

app.listen(PORT, () => {
  console.log('we are listening');
})
