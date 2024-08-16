import {config} from "dotenv"
config()
export const mongo = {
    url: process.env.MONGO_URL + process.env.MONGO_DB
}
