import express from "express"
import taskCtrl from "@Controllers/tasksController.js"
import Validator from "../middlewares/Validator"
const Router = express.Router()

Router.get("/", taskCtrl.findAll)
Router.get("/:id", taskCtrl.findById)
Router.post("/", Validator("createTask"), taskCtrl.create)
Router.put("/:id", Validator("updateTask"), taskCtrl.updateById)
Router.delete("/:id", taskCtrl.deleteById)

export default Router
