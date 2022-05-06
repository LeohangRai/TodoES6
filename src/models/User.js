import bookshelf from "../config/bookshelf.js"
// import knex from "knex";
//import bookshelf from'../config/bookshelf'

const tableName = "users"
// Creating User Model
const User = bookshelf.model(
  "User",
  {
    tableName: tableName,
  },
  {
    // Static class properties and methods
    getTableName: function () {
      return tableName
    },
  }
)

// Exporting Model
export default User
