import React, { useState } from 'react'
import './LogIn.css'
import AuthService from '../../service/auth.service.js'
import { useHistory } from 'react-router-dom'

const LogIn = (props) => {

	const history = useHistory()

	const { setIsToken, setIsUser } = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e) => {
			e.preventDefault()
			const payload = { email, password }
			AuthService.logIn(payload)
				.then(response => {
					console.log(response)
					if(response.token) {
						setIsToken(response.token)
						setIsUser(response.name)
						history.push('/user')
					} else {
						alert(response.messageErr)
					}
				})
	}

	const handleRegistration = e => {
		e.preventDefault()
		history.push('/registration')
	}

	return(
		<div className='LogIn' >
			<h3>Login</h3>
			<div>
				<form>
					<input
						type='email'
						name='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button
						className='goiin'
						onClick={handleLogin}
					>
						Войти
					</button>
					<button
						className='registration'
						onClick={handleRegistration}
					>
						Регистрация
					</button>
				</form>
			</div>
		</div>
	)
}


export default LogIn