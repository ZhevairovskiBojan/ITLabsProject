const express = require('express');
const auth = require ('../../services/recentActivity/recentActivityHandler/authHandler');
const db = require ('../../pkb/db/index');
const cors = require('cors');
// const jwt = require ('express-jwt');
const { getRecentActivity } = require('./recentActivityHandler/authHandler');

const app = express();

db.init();
app.use(express.json());
app.use(cors())
// app.use(jwt.expressjwt({
//   algorithms: ['HS256'],
//   secret: process.env.JWT_SECRET,
//  })
// );

app.get('/api/v1/recentActivity/activities', auth.getRecentActivity);


app.listen(process.env.PORTACTIVITY, (err) => {
  if (err) {
      console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTACTIVITY}`);
});
