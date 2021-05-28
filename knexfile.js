// Update with your config settings.

module.exports = {
    client: 'mysql2',
    connection: {
      database: 'ajuda_sus',
      user:     'root',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
