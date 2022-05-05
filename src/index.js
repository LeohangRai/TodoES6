require("module-alias/register")
import "@config/dotenv"
import express from "express"
import bodyParser from "body-parser"
import tasksRoute from "@Routes/tasksRoute"
const app = express()
const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => {
  console.log("Server is up and running at PORT: ", PORT)
})
