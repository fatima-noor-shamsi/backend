const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")

dotenv.config()

app.use(express.json({ limit: "10mb" }))
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err)
  })

app.use("/", Routes)

module.exports = app