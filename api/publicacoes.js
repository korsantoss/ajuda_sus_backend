const knex = require('../config/db.js');

module.exports = app => {
  const get = async(req, res) => {
    try {
      const {id_unidade} = req.params;
      const getPublicacoes = await knex('publicacao').select('*').where({id_unidade});
      return res.json(getPublicacoes);
    }
    catch(e) {
      console.log(e)
      return res.status(500).send(e);
    }
  }
  
  return {get};
}