import express, { response } from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config


const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection

connectDB();

//api endpoints
 app.use("/api/food",foodRouter)
 app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(port,()=>{
    console.log(`Server started on port number http://localhost:${port}`)
})
//mongodb+srv://blackidli001:TejuIngle1405@restaurant.f6mcijh.mongodb.net/?