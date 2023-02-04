import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001
const BUILD_DIR = '../frontend/build'

app.use(express.static(BUILD_DIR))
app.get('*', (req, res) => {
	console.log(`Hello visitor on port ${process.env.PORT}`)
	res.send(`${BUILD_DIR}/index.html`)
})

app.listen(PORT, () => {
	console.log(`⚡️Listening to port ${PORT}`)
})
