import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static(`${__dirname}/build/`))

app.get('*', (req, res) => {
	res.sendFile(`${__dirname}/build/index.html`)
})

app.listen(PORT, () => {
	console.log(`⚡️Listening to port ${PORT}`)
})
