class BaseController {
  constructor(service) {
    this.service = service
    this.create = this.create.bind(this)
    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.updateById = this.updateById.bind(this)
    this.deleteById = this.deleteById.bind(this)
  }

  /*
    needs to be overridden in the sub class controllers with:
      const { title, description } = req.body 
    Pass them as object to the service.create function
  */
  async create(req, res) {
    try {
      const newObj = await this.service.create(req.body)
      return res.status(200).json({
        error: false,
        data: newObj,
      })
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: err.message,
      })
    }
  }

  async findAll(req, res) {
    try {
      const objects = await this.service.findAll()
      return res.status(200).json({
        error: false,
        data: objects,
      })
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: err.message,
      })
    }
  }

  async findById(req, res) {
    try {
      const queryObj = await this.service.findById(req.params.id)
      return res.status(200).json({
        error: false,
        data: queryObj,
      })
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: err.message,
      })
    }
  }

  /*
    needs to be overridden in the sub class controllers with:
      const { title, description } = req.body 
    Pass them as object to the service.create function
  */
  async updateById(req, res) {
    try {
      const id = req.params.id
      const data = req.body
      const updatedObj = await this.service.updateById(id, data)
      return res.status(200).json({
        error: false,
        data: updatedObj,
      })
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: err.message,
      })
    }
  }

  async deleteById(req, res) {
    try {
      const deleteMsg = await this.service.deleteById(req.params.id)
      return res.status(200).json({
        error: false,
        msg: deleteMsg,
      })
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: err.message,
      })
    }
  }
}

export default BaseController
