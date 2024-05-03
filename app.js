const express = require('express');
const path = require('path');
const app = express();
const JSONdb = require('simple-json-db');
const db = new JSONdb('db.json');
const port = 3000;

    




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });