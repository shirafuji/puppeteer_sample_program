import express = require('express');
var app = express();
import search from './handlers/search'

app.get('/search',search)

app.listen(3000, () => {
  console.log("the server listening on port 3000")
});
