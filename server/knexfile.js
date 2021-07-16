// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: "db_salvus",
      user: "root",
      password: "123456"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations` 
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds` 
    }
  }



};
