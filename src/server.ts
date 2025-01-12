import express from 'express'
import router from './router'
const app = express()
app.use('/blog',router)

export default app