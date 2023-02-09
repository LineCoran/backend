const express = require('express');


const PORT = 'https://backend-production-37e4.up.railway.app';

const app = express();

const start = ()  => {
  try {
    app.listen(PORT, () => {
      console.log(`server was started on ${PORT}`);
    }
    );
  } catch(err) {
    app.send(err);
  }
}

app.use('/', (res, req) => {
  res.send('welcome to server start page');
})

start();
