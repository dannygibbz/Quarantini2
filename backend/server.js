const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const variables = require("./variables.json")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = variables.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

const drinksRouter = require("./Routes/drinks")
const usersRouter = require("./Routes/users")
const authRouter = require("./Routes/auth")

app.use("/drinks", drinksRouter)
app.use("/users", usersRouter)
app.use("/auth", authRouter)

app.use(express.static("build"))
app.get("*", (req, res) => {
  let myPath = path.join(__dirname, "../build", "index.html")
  res.sendFile(myPath)
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
