import React from 'react'
import './logout.css'
import AuthService from '../../service/auth.service.js'
import useToken from '../../common/useToken.js'
import useUser from '../../common/useUser.js'
import { useHistory } from 'react-router-dom'
 
const LogOut = (props) => {

	const hostory = useHistory()

	const { isToken, setIsToken } = props
	const { removeToken } = useToken()
	const { removeUser } = useUser()

	const handleYes = () => {
			setIsToken(false)
			removeToken()
			removeUser()
	}

	const handleNot = () => {
		hostory.goBack()
	}

	return(
		<div>
			<div className="logOut" >
				<h3>Вы действительно хотити выйти?</h3>
				<div className="btnWrapper" >
					<div onClick={handleYes} >
							Да
					</div>
					<div onClick={handleNot} >
							Нет
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogOut