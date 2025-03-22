import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import { ConnectDB } from './utils/db.js'

const app = express()
const PORT = process.env.PORT || 5001


app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    ConnectDB()
})