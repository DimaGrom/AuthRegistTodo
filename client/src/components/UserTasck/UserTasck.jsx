import React, { useState, useEffect } from 'react'
import './userTasck.css'
import UserService  from '../../service/user.service.js'
import Modal from '../../common/modal/Modal.jsx'
import UserTasckLink from '../../components/UserTasckLink/UserTasckLink.jsx'

const UserTasck  = (props) => {

	const { isToken } = props

	const [ modalActive, setModalActive ] = useState(false)
	const [ allTasck, setAllTasck ] = useState(null)
	const [ tasck, setTasck ] = useState('')
	const [ watch, setWatch ] = useState(false)

	useEffect(() => {
		UserService.getAllTasck({token: isToken})
			.then(response => {
				setAllTasck(response.allTasck)
			})
	}, [watch])

	const handleChangeTasck = e => {
		setTasck(e.target.value)
	} 

	const addTasck = () => {
		if(UserService.validationString(tasck) === '') {
			return alert('Нужно заполнить задание или отменить')
		}
		const payload = {tasck, token: isToken}
		UserService.addTasck( payload )
			.then(response => {
				setWatch(!watch)	
				setTasck('')
				setModalActive(false)			
			})		
	}

	const changeTasck = (id, text) => {
		const payload = {text, token: isToken, id}
		if(UserService.validationString(text) === '') {
			return alert('Задание не должно быть пустым. Либо нажмите "отмена"')
		}
		UserService.changeTasck(payload)
			.then(() => setWatch(!watch))
	}

	const deleteTasck = (id) => {
		const payload = { idTasck: id, token: isToken }
		UserService.deleteTasck(payload)
			.then(() => setWatch(!watch))
	}

	return(
		<div className='UserTasck' >

			<Modal 
				active={modalActive}
				setActive={setModalActive}
			>
				<div>
					<div>
						<p>
							<textarea 
								rows="7" 
								cols="45" 
								name="tasck"
								type='text'
								value={tasck}
								onChange={handleChangeTasck}
								placeholder="Задание"
							>
							</textarea>
						</p>
					</div>

					<div className="UserTasck__tasck" >
						<button onClick={addTasck} >	
							Добавить
						</button>
						<button 
							className="red" 
							onClick={() => setModalActive(false)} 
						>
							Отмена
						</button>
					</div>
				</div>
			</Modal>

			<div className="wrapper_btn__add" >
				<button
					className="btn__add"
					onClick={() => setModalActive(true)}
				>	
					Добавить задание
				</button>
			</div>

			<div>
				{allTasck && allTasck.length > 0
					? allTasck.map( m => 
							<UserTasckLink 
								key={m.id} 
								data={m} 
								setTasck={setTasck} 
								changeTasck={changeTasck}
								deleteTasck={deleteTasck} 
						/> )
					: <p>Пока ещё нет заданий</p>
				}
			</div>

		</div>	
	)
}

export default UserTasck