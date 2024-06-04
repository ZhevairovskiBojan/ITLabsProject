const express = require('express');
const auth = require ('../../services/category/categoryHandler/authHandler');
const db = require ('../../pkg/db/index');
const cors = require('cors');
const jwt = require ('express-jwt');
// const multer = require('multer');

// const upload = multer({ dest: 'uploads/' });

const category = require('../../pkg/category/categorySchema');

const app = express();

db.init();
app.use(express.json());
app.use(cors())
// app.use(jwt.expressjwt({
// algorithms: ['HS256'],
// secret: process.env.JWT_SECRET,
// })
//  );

  app.get('/test', async (req,res) => {
  const categories = await category.find();

  res.send (categories);
})


app.get('/api/v1/category', auth.getAllCategory);
app.get('/api/v1/category/oneCategory/:id', auth.getOneCategory);
app.post('/api/v1/category/newCategory/:id', auth.createCategory);
app.patch('/api/v1/category/updateCategory/:id', auth.updateCategory);
app.delete('/api/v1/category/categoryDelete/:id', auth.deleteCategory);




app.listen(9030,(err) => {
  if (err) {
      console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTCATEGORY}`);
});

