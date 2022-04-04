import axios from 'axios'

const baseUrl = 'http://localhost:5000'


const addTasck = async payload => {
	const request = await axios.post(`${baseUrl}/addtasck`, payload)
	const response = await request.data
	return response
}


const getAllTasck = async payload => {
	const request = await axios.post(`${baseUrl}/getalltasck`, payload)
	const response = await request.data
	return response
}

const changeTasck = async payload => {
	const request = await axios.post(`${baseUrl}/changetasck`, payload)
	const response = await request.data
	return response
}


const deleteTasck = async payload => {
	const request = await axios.post(`${baseUrl}/deletetasck`, payload)
	const response = await request.data
	return response
}


const validationString = str => {
	return str.replace(/^ +| +$|() +/g, "$1")
}


export default { addTasck, getAllTasck, validationString, changeTasck, deleteTasck }