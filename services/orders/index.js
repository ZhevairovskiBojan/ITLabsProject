const express = require('express');
const auth = require ('../../services/orders/orderHandler/authHandler');
const db = require ('../../pkg/db/index');
const cors = require('cors');
// const jwt = require ('express-jwt');

const app = express();

db.init();
app.use(express.json());
app.use(cors())
// app.use(jwt.expressjwt({
//   algorithms: ['HS256'],
//   secret: process.env.JWT_SECRET,
//  })
// );

app.get('/api/v1/orders/allOrders', auth.getAllOrders);
app.get("/api/v1/orders/total-price", auth.getTotalOrderPrice);
app.get('/api/v1/orders/oneOrder/:id', auth.getOneOrder);
app.post('/api/v1/orders/newOrder', auth.createOrder);
app.patch('/api/v1/orders/updateOrder/:id', auth.updateOrder);


app.listen(process.env.PORTORDERS, (err) => {
  if (err) {
      console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTORDERS}`);
});
