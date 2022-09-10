// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 */

 require('dotenv').config()

module.exports = {

  production: {
    client: 'postgresql',
    connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            ssl:{ rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
