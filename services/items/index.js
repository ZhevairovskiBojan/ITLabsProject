const express = require('express');
const auth = require ('../../services/items/itemsHandler/authHandler');
const db = require ('../../pkb/db/index');
// const cors = require('cors');
// const jwt = require ('express-jwt');

const app = express();

db.init();
app.use(express.json());
app.use(cors())
app.use(jwt.expressjwt({
  algorithms: ['HS256'],
  secret: process.env.JWT_SECRET,
 })
);

app.get('/api/v1/items', auth.getAllItems);
app.get('/api/v1/oneItem/:id', auth.getOneItem);
app.post('/api/v1/newItem/:id', auth.createItems);
app.patch('/api/v1/updateItem/:id', auth.updateItems);
app.delete('/api/v1/items/:id', auth.delete);


app.listen(process.env.PORTAUTH, (err) => {
  if (err) {
    console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTAUTH}`);
});