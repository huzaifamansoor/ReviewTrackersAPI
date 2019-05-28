const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Routes
const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/location');
const reviewRoutes = require('./routes/review');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/reviews', reviewRoutes);
module.exports = app;
