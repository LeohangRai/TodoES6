require("module-alias/register")
import express from "express"
import bodyParser from "body-parser"
// import tasksRoute from './routes/tasksRoute.js'
import tasksRoute from "./routes/tasksRoute"
const app = express()

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
    error: false,
  })
})

app.use("/tasks", tasksRoute)

app.listen(3000, () => {
  console.log("Server is up and running at PORT: ", 3000)
})
