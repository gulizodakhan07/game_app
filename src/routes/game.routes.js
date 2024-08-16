import { Router } from "express";
import gameController from "../controllers/game.controller.js";
// import { GameController } from "../controllers/game.controller.js";
export const gameRoutes = Router()
    .get('/games',gameController.getAllGames)
    .post('/games/create',gameController.createGame)
    .put('/game/update/:gameId',gameController.updateGame)
    .delete('/game/delete/:gameId',gameController.deleteGame)





