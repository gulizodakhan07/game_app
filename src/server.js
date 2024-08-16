import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import { appConfig } from "./config/app.config.js"
import { mongoConfig } from "./config/mongo.js"
import { gameRoutes } from "./routes/game.routes.js"
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("dev"))
mongoConfig()
    .then(()=> console.log("mongoose connected"))
    .catch((err)=>{console.log(err)})
app.use('/api/v1',gameRoutes)
app.listen(appConfig.port,appConfig.host, ()=>{
    console.log(`Listenning on port ${appConfig.port}`)

})




