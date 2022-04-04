const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 5000

app.use(express.json())
app.use(cors())

app
	.use('/', require('./routers/auth.router.js'))
	.use('/', require('./routers/user.router.js'))

app.listen(PORT, () => console.log(`\n   Сервер работает на  -  localhost:${PORT}\n`))