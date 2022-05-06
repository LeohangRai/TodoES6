import express from "express"
import { register, login } from "../../controller/apis/authController.js"
const Route = express.Router()

// Login User
Route.route("/user/register").post(register)

// Login User
Route.route("/user/login").post(login)

// Exporting Routes
export default Route
