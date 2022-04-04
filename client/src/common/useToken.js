import { useState } from 'react'

const useToken = () => {

	const getToken = () => {
		const saved = localStorage.getItem('token')
		const initialToken = JSON.parse(saved)
		return initialToken || false
	}

	const [isToken, setIsToken] = useState(getToken())

	const saveToken = payload => {
		localStorage.setItem('token', JSON.stringify(payload))
		setIsToken(payload)
	}

	const removeToken = () => {
		localStorage.removeItem('token')
	}

	return { isToken, setIsToken: saveToken, removeToken }

}

export default useToken