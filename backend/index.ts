import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001
const BUILD_DIR = path.join(__dirname, '../frontend/build')
console.log(BUILD_DIR)

app.use(express.static(BUILD_DIR))
app.get('*', (req, res) => {
	console.log(`Hello visitor on port ${process.env.PORT}`)
	res.sendFile(path.join(BUILD_DIR, 'index.html'))
})

app.listen(PORT, () => {
	console.log(`⚡️Listening to port ${PORT}`)
})
