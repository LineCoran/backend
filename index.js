require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async ()  => {
  try {
    app.listen(PORT, async () => {
      await sequelize.authenticate()
      await sequelize.sync()
      console.log(`server was started on ${PORT}`);
    }
    );
  } catch(err) {
    app.send(err);
  }
}

app.use('/', (res, req) => {
  req.send('welcome to server start page');
})

start();
