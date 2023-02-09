const express = require('express');


const PORT = 'backend-production-37e4.up.railway.app';

const app = express(PORT, () => {
  console.log(`server was started on ${PORT}`)
});


