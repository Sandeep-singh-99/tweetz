import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

import { ConnectDB } from './utils/db.js'
import userRoutes from './routes/user.routes.js'

const app = express()
const PORT = process.env.PORT || 5001


app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', userRoutes)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    ConnectDB()
})