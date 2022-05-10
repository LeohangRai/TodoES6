import app from "./app"
import "@config/dotenv"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server is up and running at PORT: ", PORT)
})
