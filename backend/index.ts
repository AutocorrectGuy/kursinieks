import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001
const BUILD_PATH = __dirname + '/build/'

app.use(express.static(BUILD_PATH))
app.get('*', (req, res) => {
	console.log(BUILD_PATH)
	res.sendFile(BUILD_PATH + 'index.html')
})

app.listen(PORT, () => {
	console.log(`⚡️Listening to port ${PORT}`)
})
