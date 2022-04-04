import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import AuthService from '../../service/auth.service.js'
import useToken from '../../common/useToken.js'
import useUser from '../../common/useUser.js'
import './user.css'
import UserTasck from '../UserTasck/UserTasck.jsx'
import UserTuning from '../UserTuning/UserTuning.jsx'


const User = (props) => {
	const { isToken, setIsToken } = props
	const { removeToken } = useToken()
	const { removeUser } = useUser()

	const deleteUser = () => {
		const payload = {token: isToken}
		AuthService.deleted(payload)
			.then(response => {
				console.log(response)
				removeToken()
				removeUser()
				setIsToken(false)
			})
	}

	return(
		<div className='User' >
			<h1>Личные кабинет</h1>
			<div className='User__tasck' >
				<div>
					<Link to="/user/tasck">
						Задачи
					</Link>
				</div>
				<div>
					<Link to='/user'>
						Назад
					</Link>
				</div>
				<div>
					<Link to='/user/tuning'>
						Настройка
					</Link>
				</div>
			</div>

			<Switch>
				<Route  path='/user/tasck'>
					<UserTasck isToken={isToken} />		
				</Route>
				<Route  path='/user/tuning'>
					<UserTuning 
						isToken={isToken} 
						deleteUser={deleteUser}
					/>		
				</Route>
			</Switch>

		</div>
	)
}

export default User