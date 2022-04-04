const axios = require('axios')
const AuthService = require('../service/auth.service.js')

const baseURL = 'http://localhost:7000/users'


class AuthController {
	
	 // >>> registration  -----------------
	async registration (request, response) {
		const {name, email, password} = request.body
		const token = AuthService.token()
		const check = await AuthService.check(email).then(data => data)
		if(check) {
			return response.send({messageErr: 'email уже зарегистрирован, попробуйдте другой'})
		} else {
			AuthService.create({name, email, password, token, tasck: []})
			return response.send({message: 'Регистрация прошла успешно!', token, name})
		}
	} 
	// <<< end registration -----------------------

	// >>>  login  -----------------
	async login (request, response) {
		const { email, password } = request.body
		const payload = {email, password }
		const checkLogin = await AuthService.checkLogin(payload).then(data => data)

		if(checkLogin) {			
			const token = AuthService.token()
			const req = await axios.get(`${baseURL}/${checkLogin.id}`)
			const user = await req.data
			const changeToken = await axios.put(`${baseURL}/${checkLogin.id}`, { ...user, token })
			const res = await changeToken.data
			response.send({token, name: user.name})
		}	else {
			response.send({messageErr: 'Такого пользователя нет. Проверте правильность заполения полей или пройдите ригистрацию. '})
		}
	}
	// <<< end login -------------------------

	// >>> deleted
		async deleted (request, response) {
			const {token} = request.body
			await AuthService.deleted(token)
			response.send({message: 'Анкета удалена!'})
		}
	// <<< deleted


}


module.exports = new AuthController()