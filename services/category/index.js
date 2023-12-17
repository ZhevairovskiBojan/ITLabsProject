const express = require('express');
const auth = require ('../../services/category/categoryHandler/authHandler');
const db = require ('../../pkb/db/index');
// const cors = require('cors');
const jwt = require ('express-jwt');

const app = express();

db.init();
app.use(express.json());
// app.use(cors())
app.use(jwt.expressjwt({
algorithms: ['HS256'],
secret: process.env.JWT_SECRET,
})
 );

app.get('/api/v1/categories', auth.getAll);
app.get('/api/v1/oneCategory/:id', auth.getOne);
app.post('/api/v1/newCategory/:id', auth.createCategory);
app.patch('/api/v1/updateCategory/:id', auth.update);
app.delete('/api/v1/category/:id', auth.delete);


app.listen(process.env.PORTAUTH, (err) => {
  if (err) {
    console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTAUTH}`);
});

