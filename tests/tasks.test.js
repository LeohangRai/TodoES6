import setupDB from "./fixtures/dbSetup"
import request from "supertest"
import app from "../dist/app"
import models from "@Models"

const Task = models.Task

beforeAll(setupDB)

const newTask = {
  title: "Test task",
  description: "Test task description",
}

test("Should create a new task", async () => {
  const response = await request(app).post("/tasks").send(newTask).expect(200)

  const task = await Task.where({ id: response.body.data.id }).fetch({
    require: true,
  })
  expect(task.attributes.title).toBe(newTask.title)
})

test("Should not create task without title", async () => {
  await request(app)
    .post("/tasks")
    .send({
      description: "Test task description",
    })
    .expect(422)
})

test("Should not create task with empty title", async () => {
  await request(app)
    .post("/tasks")
    .send({
      title: "",
      description: "Test task description",
    })
    .expect(422)
})

test("Should not create task with description that exceeds 100 characters", async () => {
  await request(app)
    .post("/tasks")
    .send({
      title: newTask.title,
      description:
        "The box sat on the desk next to the computer. It had arrived earlier in the day and business had interrupted her opening it earlier. She didn't who had sent it and briefly wondered who it might have been.",
    })
    .expect(422)
})

test("Should read all the tasks", async () => {
  const response = await request(app).get("/tasks").expect(200)

  const tasks = await Task.fetchAll()
  const parsedTasks = JSON.parse(JSON.stringify(tasks))
  expect(parsedTasks).toMatchObject(response.body.data)
})

test("Should update a task", async () => {
  await request(app)
    .put("/tasks/1")
    .send({
      title: "Updated dummy task 1",
      description: "Updated dummy task 1 description",
    })
    .expect(200)

  const task = await Task.where({ id: 1 }).fetch({ require: true })
  expect(task.attributes.title).toBe("Updated dummy task 1")
})

test("Should not update a task with empty title", async () => {
  await request(app)
    .put("/tasks/1")
    .send({
      title: "",
      description: "Dummy task 1 updated",
    })
    .expect(422)
})

test("Should not update a task with description exceeding a 100 characters", async () => {
  await request(app)
    .put("/tasks/1")
    .send({
      description:
        "The box sat on the desk next to the computer. It had arrived earlier in the day and business had interrupted her opening it earlier. She didn't who had sent it and briefly wondered who it might have been.",
    })
    .expect(422)
})

test("Should delete a task", async () => {
  await request(app).delete("/tasks/3").expect(200)

  await expect(
    Task.where({ id: 3 }).fetch({ require: true })
  ).rejects.toMatchObject({
    message: "EmptyResponse",
  })
})

test("Should not delete a task when invalid id is passed as parameter", async () => {
  await request(app).delete("/tasks/0").expect(404)
})
