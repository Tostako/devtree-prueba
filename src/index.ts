import express from 'express'
const app = express()

const port = process.env.port || 4000
//ROUTING
app.get('/', (req, res) => {
    res.send('hola mundo')

})
app.get('/ecommerce', (req, res) => {
    res.send('entro a ecommerce')

})
app.listen(port, () => {
    console.log('servidor prendido en el puerto: ', port)

})