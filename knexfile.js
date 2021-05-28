// Update with your config settings.

module.exports = {
    client: 'mysql2',
    connection: {
      host: 'sql10.freemysqlhosting.net',
      database: 'sql10415555',
      user:     'sql10415555',
      password: '3niKgKZmuA'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
