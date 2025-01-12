import server from "./server"

const port = process.env.port || 400

server.listen(port, () => {
    console.log('servidor prendido en el puerto: ', port)

})
