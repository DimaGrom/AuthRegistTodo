import axios from 'axios'

const baseUrl = 'http://localhost:5000'

const validateEmail = (email) => {
let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}

const registration = async (payload) => {
	const request = await axios.post(`${baseUrl}/registration`, payload)
	const response = await request.data
	return response
}

const logIn = async payload => {
	const request = await axios.post(`${baseUrl}/login`, payload)
	const response = await request.data
	return response
}


const deleted = async payload => {
	const request = await axios.post(`${baseUrl}/auth/deleted`, payload)
	const response = await request.data
	return response
}


export default { validateEmail, registration, logIn, deleted }