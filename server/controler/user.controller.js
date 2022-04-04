const axios = require('axios')

const baseURL = 'http://localhost:7000/users'


class UserController {

	async allRight (request, response) {
		response.send('Всё просто отлично!!!')
	}

	async addTasck (request, response) {
		const {tasck, token} = request.body
		const req = await axios.get(baseURL)
		const user = await req.data.find( f => f.token === token )
		const payload = {id: Date.now(), text: tasck}
		const addTasck = await axios.put(`${baseURL}/${user.id}`, { ...user, tasck: [...user.tasck , payload ]})
		const res = await addTasck.data
		response.send({message: 'Всё отлично!', tascks: res.tasck})
	}

	async getAllTasck (request, response) {
		const {token} = request.body
		console.log('UseEffect работает')
		const req = await axios.get(baseURL)
		const user = await req.data.find( f => f.token === token )
		const allTasck = await user.tasck
		response.send({allTasck})
	}

	async changeTasck (request, response) {
		console.log(request.body)
		const { text, token, id } = request.body
		const req = await axios.get(baseURL)
		const users = await req.data
		const user = await users.find(f => f.token === token)
		const tasck = await user.tasck.map(m => {
				if(m.id === id) {
					return { ...m, text }
				}
			return {...m}
		})
		const changeTasck = await axios.put(`${baseURL}/${user.id}`, { ...user, tasck })
		const res = await changeTasck.data
		response.send({message: 'Всё ОК!', tasck})
	}


	async deleteTasck(request, response) {
		console.log(request.body)
		const {idTasck, token} = request.body
		const req = await axios.get(baseURL)
		const users = await req.data
		const user = await users.find(f => f.token === token)
		const tasck = await user.tasck.filter(f => f.id !== idTasck)
		const deleteTasck = await axios.put(`${baseURL}/${user.id}`, { ...user, tasck})
		const res = await deleteTasck.data
		response.send({message: 'Всё ОК!', user, res})
	}


}

module.exports = new UserController()