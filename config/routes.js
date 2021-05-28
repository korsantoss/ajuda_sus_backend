module.exports = app => {
  app.get('/', (req, res) => {
    res.send('backend ok')
  })

  app.route('/bairros')
    .get(app.api.bairros.get)

  app.route('/unidades')
    .get(app.api.unidades.get)

  app.route('/publicacoes')
    .get(app.api.publicacoes.get)
}