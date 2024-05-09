
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const connectDb=async()=>{
    try{
    await mongoose.connect(process.env.DBURL);
    console.log("db connected");
    }
    catch(error){
        console.log("error",error)
    }
}
export default connectDb