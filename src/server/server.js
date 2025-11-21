import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import recipeRoutes from "../routes/route.js"

const app = express()
const port = 3000

dotenv.config()
let db_url=process.env.url

mongoose.connect(db_url).then(()=>{
    console.log("MongoDB Connected!")
}).catch((error)=>{
    console.log("MongoDB Connection Error!")
    console.error(error.message)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use(express.json())
app.use("/recipe",recipeRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
