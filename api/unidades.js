const knex = require('../config/db.js');

module.exports = (app) => {
  const get = async(req, res) => {
    try {
      const { bairro } = req.params;
      const getUnidades = await knex('unidade').select('*').where({ bairro });
      return res.json(getUnidades);
    }
    catch(e) {
      console.log(e)
      return res.status(500).send(e);
    }
  }
  
  return {get};
}