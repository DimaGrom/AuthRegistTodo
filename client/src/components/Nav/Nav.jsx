import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import useToken from '../../common/useToken.js'


const Nav = (props) => {

	const {isToken, setIsToken, isUser} = props
	const {removeToken} = useToken()

	return(
		<div className="div_Nav" >
			<nav className="Nav">
				<div className="Nav_item">
					<div>
						<Link to='/'>
							Ноmе
						</Link>
					</div>
					{isToken
						&&	<>
							<div>
								<Link to='/user'>
									{isUser}
								</Link>
							</div>
						</>	
					}	
				</div>
				<div className="Nav_login">
					{isToken
						? <div>
								<Link to='/logout' >
									Log out
								</Link>
							</div>
						:	<>
							<div>
								<Link to='/login'>
									Log in
								</Link>
							</div>
							<div>
								<Link to="/registration" >
									Registration
								</Link>
							</div>
						</>	
					}				
				</div>
			</nav>
		</div>
	)
}

export default Nav