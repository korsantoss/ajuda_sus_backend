const app = require('express')();
const consign = require('consign');
require('dotenv').config();
const port = process.env.port;

consign()
  .include('./config/middleware.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.listen(port, () => {
  console.log('༼ つ ◕_◕ ༽つ');
})