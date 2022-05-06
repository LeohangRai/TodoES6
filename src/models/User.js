import bookshelf from "../config/bookshelf.js"
// import knex from "knex";
//import bookshelf from'../config/bookshelf'

// Creating User Module
const User = bookshelf.model("User", {
  tableName: "users",
})

// Exporting Model
export default User
