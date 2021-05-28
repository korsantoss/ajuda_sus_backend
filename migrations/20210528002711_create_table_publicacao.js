
exports.up = function(knex) {
  return knex.schema.createTable('publicacao', (table) =>{
    table.increments('id_publicacao').primary();
    table.string('titulo').notNullable();
    table.date('data').notNullable();
    table.text('conteudo').notNullable();
    table.integer('id_unidade').unsigned().notNullable();
    table.foreign('id_unidade').references('id_unidade').inTable('unidade').onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('publicacao');
};
