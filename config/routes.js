module.exports = app => {
  app.get('/', (req, res) => {
    res.json({msg: "backend executando"})
  })

  app.route('/bairros')
    .get(app.api.bairros.get)

  app.route('/unidades/:bairro')
    .get(app.api.unidades.get)

  app.route('/publicacoes/:id_unidade')
    .get(app.api.publicacoes.get)
}