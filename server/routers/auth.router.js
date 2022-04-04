const express = require('express')
const router = express.Router()
const AuthController  = require('../controler/auth.controler.js')

router
	.post('/registration', AuthController.registration)
	.post('/login', AuthController.login)
	.post('/auth/deleted', AuthController.deleted)

module.exports = router