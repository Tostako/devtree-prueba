import server from "./server"
import colors from "colors"

const port = process.env.port || 4000

server.listen(port, () => {
    console.log(colors.bgGreen.white.italic( 'servidor prendido en el puerto: '), port)

})
