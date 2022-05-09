class BaseController {
  constructor(service) {
    this.service = service
    this.create = this.create.bind(this)
    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.updateById = this.updateById.bind(this)
    this.deleteById = this.deleteById.bind(this)
  }

  async create(req, res, next) {
    try {
      const data = await this.service.create(req.body)
      return res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  async findAll(req, res, next) {
    try {
      const data = await this.service.findAll()
      return res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  async findById(req, res, next) {
    try {
      const data = await this.service.findById(req.params.id)
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  async updateById(req, res, next) {
    try {
      const data = await this.service.updateById(req.params.id, req.body)
      return res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  async deleteById(req, res, next) {
    try {
      const data = await this.service.deleteById(req.params.id)
      return res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}

export default BaseController
