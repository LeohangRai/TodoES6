class CustomError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.message = message
  }

  static badRequest(msg) {
    return new CustomError(msg, 400)
  }

  static internalServer(msg) {
    return new CustomError(msg, 500)
  }

  static notFound(msg) {
    return new CustomError(msg, 404)
  }

  static errorFinder(error, tableName) {
    if (error.message === "EmptyResponse") {
      return CustomError.notFound(`There are no ${tableName} for the given id`)
    }
    return CustomError.internalServer("Something went wrong")
  }
}

export default CustomError
