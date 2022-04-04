import React, { useState } from 'react'
import './userTasckLink.css'
import Modal from '../../common/modal/Modal.jsx'

const UserTasckLink = ({data, changeTasck, deleteTasck}) => {

	const [modalActive, setModalActive] = useState(false)
	const [text, setText] = useState(data.text)

	const handleModalTasck = () => {
		setModalActive(true)
	}

	const hanleChangeText = e => {
		setText(e.target.value)
	}

	const hanleChangeTasck = () => {
		changeTasck(data.id, text)
		setModalActive(false)
	}

	const handleDelete = () => {
		const id = data.id
		deleteTasck(id)
	}

	return(
		<div className="UserTasckLink" >

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
								value={text}
								onChange={hanleChangeText}
							>
							</textarea>
						</p>
					</div>
					<div className="UserTasck__tasck" >
						<button onClick={hanleChangeTasck} >	
							Изменить
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

			<div>
				{data.text}
			</div>

			<div className="UserTasckLink__tasck" >
				<div onClick={handleModalTasck} >
					Изменить
				</div>
				<div 
					className="red" 
					onClick={handleDelete}
				>
					Удалить
				</div>
			</div>

		</div>
	)
}

export default UserTasckLink