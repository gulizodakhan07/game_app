import {model,Schema} from "mongoose"
const gameSchema = new Schema({
    name: String,
    image_url: String
})
export const Game = model('game',gameSchema)
