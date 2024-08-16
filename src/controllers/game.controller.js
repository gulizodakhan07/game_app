import { isValidObjectId } from "mongoose";
import { Game } from "../model/game.model.js";
export class GameController {
    constructor(){}
    async getAllGames(req,res){
        const allGames = await Game.find()
        res.send({message: "success",data: allGames})
        return

    }
    async createGame(req,res){
        const {name,image_url} = req.body
        const newGame = new Game({
            name: name,
            image_url: image_url
        })
        await newGame.save()
        res.status(201).send({message: "Game created successfully",data: newGame})

    }

    async updateGame(req,res){
        const {name,image_url} = req.body
        const {gameId} = req.params

        const foundGame = await Game.findById(gameId)
        if(!isValidObjectId(gameId)){
            return res.status(400).send({message: "Please,send object id"})
        }
        if(!foundGame){
            return res.status(404).send({message: "game not found"})
        }
        await Game.updateOne({_id:gameId},{
            $set: {
                image_url: image_url,
                name: name
            }
        })
        res.status(200).send({message: "Game updated successfully"})

    }
    async deleteGame(req,res){
        const {gameId} = req.params
        const foundGame = Game.findById(gameId)
        if(!isValidObjectId(gameId)){
            return res.status(400).send("Please, send object id")
        }
        if(!foundGame){
            return res.status(404).send("Game not found")
        }
        await Game.deleteOne({_id: gameId})
        res.status(200).send({message: "Game deleted successfully"})
    }

}
export default new GameController
