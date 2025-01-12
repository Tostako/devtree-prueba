import { Router } from 'express'
const router = Router() 

//ROUTING
router.get('/', (req, res) => {
    res.send('hola mundo listo')

})

router.get('/ecommerce', (req, res) => {
    res.send('entro a ecommerce listo ')

})
router.get('/blog', (req, res) => {
    res.send('entro a ecommerce listo ')

})

export default router