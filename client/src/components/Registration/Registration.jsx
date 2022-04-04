import React, { useState } from 'react'
import './registration.css'
import { useHistory } from "react-router-dom"
import AuthService from '../../service/auth.service.js'


const Registration  = (props) => {
	
	const { setIsToken, setIsUser } = props
	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleRegistr = e => {
		e.preventDefault()
		const checkEmail = AuthService.validateEmail(email)

		if(checkEmail && name !== '' && password !== '') {
			const payload = {
				name, email, password
			}
				AuthService.registration(payload)
				.then(response => {
					console.log(response)
					console.log(response.token)
					setName('')
					setEmail('')
					setPassword('')
					if(response.token) {
						setIsToken(response.token)
						setIsUser(response.name)
						let path = '/user';
						history.push(path)
					} else {
						alert(response.messageErr)
					}		
				})
		} else {
			alert('Неправильно введены данные. Имя и пароль  должны быть заполнены')
		}
	}

	return(
		<div className='Registration' >
			<h3>Registration</h3>
			<div>
				<form>
					<input
						type='text'
						name='name'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
					<input
						type='email'
						name='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<input
						type='password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<button
						onClick={handleRegistr}
					>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</div>
	)
}

export default Registration