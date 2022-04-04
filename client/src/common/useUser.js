import { useState } from 'react'

const useUser = () => {

	const getUser = () => {
		const saved = localStorage.getItem('user')
		const initialUser = JSON.parse(saved)
		return initialUser || false
	}

	const [ isUser, setIsUser ] = useState(getUser())

	const saveUser = payload => {
		localStorage.setItem('user', JSON.stringify(payload))
		setIsUser(payload)
	}

	const removeUser = () => {
		localStorage.removeItem('user')
	}

	return { isUser, setIsUser: saveUser, removeUser }

}

export default useUser