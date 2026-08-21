import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import cors from "cors";

import { connectDB } from "./src/config/db.js"
import authRouter from "./src/routes/user.routes.js"
import aiRouter from "./src/routes/aiRoutes.js";

import healthRouter from './src/routes/health.router.js';
dotenv.config()


const app=express()
const PORT=process.env.PORT || 5000;

app.use(
    cors({
    origin:process.env.Frontend_URL,
    credentials:true
    })
)

app.use(express.json())
app.use(cookieParser())

app.use('/', healthRouter);
app.use('/api/auth',authRouter)
app.use('/api/ai',aiRouter)

app.get('/',(req,res)=>{
    return res.json({message:"Server is Started"})
})
app.listen(PORT,()=>{
    console.log(`Your server is running in http://localhost:${PORT} `)
    connectDB()
})