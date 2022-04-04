const axios = require('axios')


const baseURL = 'http://localhost:7000/users'


const check = async (email) => {
	const request = await axios.get(baseURL)
	const response = await request.data
	const check = await response.find(f => f.email === email)
	return check
} 


const create = async (payload) => {
	const request = await axios.post(baseURL, payload)
	const response = await request.data
	return response
}


const token = () => {
	const token = []
	const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'f', 'j', 'h', 'i', 'z', 'x', 'y', 's', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'f', 'A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'S', 'I', 'K', 'L', 'W', 'U', 'Q', 'R', 'Y', 'X', 'Z', 'U', 'U', 'J', 'V', '$', '%', '&', '#', '*']
	
	for(let i = 0; i < 200; i++) {
		token[i] = x[Math.floor(Math.random() * 62)]
	}

	return token.join('')
}


const checkLogin = async payload => {
	const request = await axios.get(baseURL)
	const response = await request.data
	const checkLogin = await response.find(f => f.email === payload.email && f.password === payload.password)
	return checkLogin
}


const _user = async (payload) => {
	const request = await axios.get(baseURL)
	const response = await request.data
	const user = await response.find(f => f.token === payload)
	return user
}


const deleted = async (payload) => {
	const user = await _user(payload)
	const id = await user.id
	const request = await axios.delete(`${baseURL}/${id}`)
	return request
}


module.exports = { token, check, create, checkLogin, deleted }