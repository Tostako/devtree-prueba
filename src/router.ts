import { Router } from 'express'
const router = Router() 

//ROUTING
router.get('/auth/register', (req,res) => {
    console.log("entro")
})

export default router