const express = require('express')
const router = express.Router()
const UserController = require('../controler/user.controller.js')

router
	.get('/addtasck', UserController.allRight)
	.post('/addtasck', UserController.addTasck)
	.post('/getalltasck', UserController.getAllTasck)
	.post('/changetasck', UserController.changeTasck)
	.post('/deletetasck', UserController.deleteTasck)


module.exports = router