
import express from "express"
const app = express()
import cookieParser from "cookie-parser"
import connectDb from "../config/db.js"
import userRouter from "../routes/userRouter.js"
import instructorRouter from "../routes/instructorRouter.js"


const port = 3000
app.use(express.json())
app.use(cookieParser());
app.use("/api/v1/user",userRouter)
app.use("/api/v1/instructor",instructorRouter)
connectDb();
app.get('/', (req, res) => {
  res.send('Hello World!')  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})