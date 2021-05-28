
exports.up = function(knex) {
  return knex.schema.createTable('unidade', (table) =>{
    table.increments('id_unidade').primary();
    table.string('nome').notNullable();
    table.string('rua').notNullable();
    table.string('bairro').notNullable();
    table.string('cidade').notNullable();
    table.integer('numero_endereco').notNullable();
    table.string('uf').notNullable();
    table.string('telefone').notNullable();
    table.string('hr_funcionamento').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('unidade');
};
