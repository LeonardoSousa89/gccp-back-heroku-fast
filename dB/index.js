const dB=require('../knexfile')['production']
const knex=require('knex')(dB)

module.exports=knex 