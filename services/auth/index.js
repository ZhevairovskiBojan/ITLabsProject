const express = require('express');
const auth = require('./handlers/authHandler');
const db = require('../../pkg/db/index');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const jwt = require ('express-jwt');

const app = express();

db.init();
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use(jwt.expressjwt({
  algorithms: ['HS256'],
  secret: process.env.JWT_SECRET,
  getToken: (req) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    }
    if (req.cookies.jwt) {
      return req.cookies.jwt;
    }
    return null;
  },
})
.unless({
    path: ['/api/v1/auth/create-account', '/api/v1/auth/login'],
})
);

app.post('/api/v1/auth/create-account', auth.signup);
app.post('/api/v1/auth/login', auth.login);

app.listen(process.env.PORTAUTH, (err) => {
  if (err) {
    console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTAUTH}`);
});