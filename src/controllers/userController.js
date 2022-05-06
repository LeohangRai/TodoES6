import BaseController from "./baseController"
import UserService from "../services/userService"

class UserController extends BaseController {
  constructor(service) {
    super(service)
  }
  // create user
  async create(req, res) {
    try {
      const { firstName, lastName, email, password, conformPassword } = req.body
      const newUser = await this.service.create({
        firstName,
        lastName,
        email,
        password,
        conformPassword,
      })
      return res.status(200).json({
        status: "success",
        data: newUser,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }

  // Get All User
  async findAll(req, res) {
    try {
      const users = await this.service.findAll()
      return res.status(200).json({
        status: "success",
        data: users,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }
  // Get User By Id

  async findById(req, res) {
    try {
      const users = await this.service.findById(req.params.id)
      console.log(users)
      return res.status(200).json({
        status: "success",
        data: users,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }

  //Update User By Id
  async updateById(req, res) {
    try {
      const { firstName, lastName, email } = req.body
      const data = { firstName, lastName, email }
      const user = await this.service.updateById(req.params.id, data)

      return res.status(200).json({
        status: "success",
        message: "User Updated Success",
        data: user,
      })
    } catch (err) {
      return res.status(400).json({
        status: "fail",
        err: err.message,
      })
    }
  }
}

// Exporting controller
const userController = new UserController(UserService)
export default userController
