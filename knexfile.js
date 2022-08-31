// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 */

//  let {environment}=require('./.env')

module.exports = {

  production: {
    client: 'postgresql',
    connection: {
            host:'ec2-44-210-36-247.compute-1.amazonaws.com',
            user:'ikfzqcivuwtvnz',
            password:'42f3bb29149d75581514e0cecf56fbacb594ede500daa15a44137fa7f0361707',
            database:'d8ki94ot9piqpu',
            ssl:{ rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
