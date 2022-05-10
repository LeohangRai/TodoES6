import knexConfig from "@config/testKnexfile"
import myKnex from "knex"
import models from "@Models"
const { task1, task2, task3 } = require("./dummyTasks")

const Task = models.Task
const knex = myKnex(knexConfig["test"])

async function setupDB() {
  await knex.raw("truncate table tasks")
  await Task.forge(task1).save()
  await Task.forge(task2).save()
  await Task.forge(task3).save()
}

export default setupDB
