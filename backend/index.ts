import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001
const BUILD_PATH = path.join(__dirname, 'build/')

app.use(express.static(BUILD_PATH))
app.get('*', (req, res) => {
	res.sendFile(path.resolve(BUILD_PATH, 'index.html'))
})

app.listen(PORT, () => {
	console.log(`⚡️Listening to port ${PORT}`)
})
