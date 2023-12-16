const express = require('express');
const auth = require ('../../services/items/itemsHandler/authHandler');
const db = require ('../../pkb/db/index');
// const cors = require('cors');
// const jwt = require ('express-jwt');

const app = express();

db.init();
app.use(express.json());
// app.use(cors())
// app.use(jwt.expressjwt({
//   algorithms: ['HS256'],
//   secret: process.env.JWT_SECRET,
//   getToken: (req) => {
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.split(" ")[0] === "Bearer"
//     ) {
//       return req.headers.authorization.split(" ")[1];
//     }
//     if (req.cookies.jwt) {
//       return req.cookies.jwt;
//     }
//     return null;
//   },
// })
// .unless({
//     path: ['/api/v1/categories', '/api/v1/oneCategory/:id', '/api/v1/newCategory/:id', '/api/v1/updateCategory/:id','/api/v1/category/:id'],
// })
// );

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