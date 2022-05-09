import CustomError from "../errors/CustomError"

function customErrorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      error: err.message,
    })
  }

  res.status(500).json({
    error: err.message,
  })
  console.log("Console log: ", next)
}

export default customErrorHandler
