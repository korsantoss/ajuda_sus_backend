const knex = require('../config/db.js');

module.exports = app => {
  const get = async(req, res) => {
    try {
      const getBairros = await knex('unidade').select('bairro').groupBy('bairro')
      return res.json(getBairros);
    }
    catch(e) {
      console.log(e)
      return res.status(500).send(e);
    }
  }
  
  return {get};
}