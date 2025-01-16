import { Router } from 'express'
import User from './models/User'
const router = Router() 

//ROUTING
router.post('/auth/register', async (req,res) => {
    console.log(req.body)
    await User.create(req.body)   
})

export default router