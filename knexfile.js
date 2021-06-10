// Update with your config settings.

module.exports = {
    client: 'mysql2',
    connection: {
      host: 'remotemysql.com',
      database: 'iuzAM1kibf',
      user:     'iuzAM1kibf',
      password: 'nzCBN9Uvbm'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
