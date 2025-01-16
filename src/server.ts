import express from 'express'
import "dotenv/config"
import router from './router'
import { connectbd } from './config/bd'


const app = express()

connectbd()

//leer datos
app.use(express.json())

app.use('/',router)

export default app