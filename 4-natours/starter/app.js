const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

// routers import
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// middlewares

// 3rd party middleware
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// built-in (express.json())
app.use(express.json());

// built in static
app.use(express.static(`${__dirname}/public`));

// own middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// app listen
module.exports = app;
