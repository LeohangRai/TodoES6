import express from "express"
import UserController from "../controllers/userController"
const Route = express.Router()

// Get All Users
Route.route("/").get(UserController.findAll)

// Create User
Route.route("/").post(UserController.create)

// Find User By Id
Route.route("/:id").get(UserController.findById)

// Update User By Id
Route.route("/update/:id").patch(UserController.updateById)

// Delete User By Id
Route.route("/delete/:id").delete(UserController.deleteById)

// Exporting Routes
export default Route
