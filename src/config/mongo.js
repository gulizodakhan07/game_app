import mongoose from "mongoose"
import { mongo } from "./database.config.js"
export const mongoConfig = async ()=>{
    await mongoose.connect(mongo.url)

}