exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firstName: "Test",
          lastName: "data",
          email: "email@gmail.com",
          password: "123",
          conformPassword: "123",
        },
      ])
    })
}
