import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try{ 
     const conn =  await  mongoose.connect(process.env.MONGO_URI);
     console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(`error=>: ${error.message}`);
        process.exit(1); //proces code 1 exit with failure,0 mens success
    }
}