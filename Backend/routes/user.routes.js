import express from 'express'
import { createUser, getCurrentUser, logout } from '../controller/auth.controller.js'
const authRouter=express.Router()
authRouter.post("/create-user",createUser)
authRouter.post("/logout",logout)
authRouter.get("/me",getCurrentUser)
export default authRouter