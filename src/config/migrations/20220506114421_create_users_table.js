/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary()
    table.string("firstName")
    table.string("lastName")
    table.string("email").notNullable()
    table.string("password").notNullable()
    table.string("conformPassword").notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("users")
}