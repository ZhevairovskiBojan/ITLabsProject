const express = require('express');
const auth = require ('../../services/suppliers/authHandler');
const db = require ('../../pkg/db/index');
const cors = require('cors');
const jwt = require ('express-jwt');

const app = express();

db.init();
app.use(express.json());
app.use(cors())
app.use(jwt.expressjwt({
algorithms: ['HS256'],
secret: process.env.JWT_SECRET,
})
 );

app.get('/api/v1/supplier/suppliers', auth.getAllSuppliers);
app.get('/api/v1/supplier/oneSupplier/:id', auth.getOneSupplier);
app.post('/api/v1/supplier/newSupplier', auth.createSupplier);
app.patch('/api/v1/supplier/updateSupplier/:id', auth.updateSupplier);
app.delete('/api/v1/supplier/deleteSupplier/:id', auth.deleteSupplier);


app.listen(process.env.PORTSUPPLIERS, (err) => {
  if (err) {
      console.log('Could not start service');
  }
  console.log(`Service started successfully on port ${process.env.PORTSUPPLIERS}`);
});

