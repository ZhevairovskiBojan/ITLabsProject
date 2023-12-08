const express = require('express');
const auth = require('./handlers/authHandler');
const db = require('../../pkb/db/index');

const app = express();

db.init();
app.use(express.json());

//routes 

app.listen(process.env.PORTPOST, (err) => {
  if (err) {
    console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTPOST}`);
});

