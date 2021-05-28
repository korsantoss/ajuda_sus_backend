const app = require('express')();
const consign = require('consign');

consign()
  .include('./config/middleware.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.listen('https://ajuda-sus.herokuapp.com/', () => {
  console.log('༼ つ ◕_◕ ༽つ');
})