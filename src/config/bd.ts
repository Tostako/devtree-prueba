import mongoose from 'mongoose'
import colors from  'colors'

export const connectbd = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const puerto = `${connection.host}:${connection.port}`
        console.log(colors.bgGreen.white.italic(`base de datos conectada en ${puerto}`))
        
    } catch (error) {
        console.log( colors.red.bold(error.message))
        process.exit(1)
        
    }
}