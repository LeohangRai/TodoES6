import express from "express"
import taskCtrl from "../controllers/tasksController.js"

const Router = express.Router()

Router.get("/", taskCtrl.findAll)
Router.get("/:id", taskCtrl.findById)
Router.post("/", taskCtrl.create)
Router.put("/:id", taskCtrl.updateById)
Router.delete("/:id", taskCtrl.deleteById)

export default Router
