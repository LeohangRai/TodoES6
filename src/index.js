require("module-alias/register")
import "@config/dotenv"
import express from "express"
import bodyParser from "body-parser"
import tasksRoute from "@Routes/tasksRoute"
import userRoute from "@Routes/userRoute"
import customErrorHandler from "@Middlewares/errorHandler"
import CustomError from "./errors/CustomError"
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

// List Of All Routes
app.use("/tasks", tasksRoute)
app.use("/user", userRoute)

// for undefined routes
app.use((req, res, next) => {
  next(CustomError.notFound("Not found"))
})

// error handler middleware
app.use(customErrorHandler)

app.listen(PORT, () => {
  console.log("Server is up and running at PORT: ", PORT)
})
