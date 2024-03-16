const express = require('express');
const auth = require ('../../services/recentActivity/recentActivityHandler/authHandler');
const db = require ('../../pkg/db/index');
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

app.get('/api/v1/recentActivity/activities', async (req, res) => {
  try {
    
    const recentActivity = await auth.getRecentActivity(req.query);
    res.json(recentActivity);
  } catch (error) {
    console.error('Error fetching recent activities:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(process.env.PORTACTIVITY, (err) => {
  if (err) {
      console.log('Could not start service');
  }
  console.log(`service started successfully on port ${process.env.PORTACTIVITY}`);
});
