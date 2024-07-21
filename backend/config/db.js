import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb://localhost:27017/restaurant').then(()=>{
        console.log("DB Connected")
    })
}