// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 */

 let {environment}=require('./.env')

module.exports = {

  production: {
    client: 'postgresql',
    connection: {environment},
    pool: {
      min: 2,
      max: 10
    }
  }

};
