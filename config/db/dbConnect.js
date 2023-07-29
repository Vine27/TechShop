import mongoose from "mongoose";
import dotenv from "dotenv";



dotenv.config();

export const connectDB = async () => {
  // implementation of connectDB function
    try{
            mongoose.connect("mongodb://127.0.0.1:27017/tech-shop", {
            useNewUrlParser : true
            
        })
        console.log(".....MongoDB is now Connected succesfully......");
            
    }catch(error){
       console.error("MongDB connection FAIL");
    //    console.log(error)
        process.exit(1);
    }
};




