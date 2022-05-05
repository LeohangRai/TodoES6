const knexConfig = require("./knexfile.js")
import knex from "knex"
import bookshelf from "bookshelf"

const dbConnection = knex(knexConfig.development)
const bs = bookshelf(dbConnection)

export default bs
