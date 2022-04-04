import React, { useState } from 'react'
import './userTuning.css'
import Modal from '../../common/modal/Modal.jsx'


const UserTuning = (props) => {

	const { deleteUser } = props
	const [modalActive, setModalActive] = useState(false)

	const handleMoadlDeletUser = () => {
		setModalActive(true)
	}

	return(
		<div className="UserTuning" >
			<h2>Настройка кабинета</h2>
			<Modal
				active={modalActive}
				setActive={setModalActive}
			>
				<div>
					<p>Вы действительно хотите удалить свою анкету???</p>
					<div className="tasck" >
						<div
							className="yes"
							onClick={deleteUser}
						>
							Да
						</div>
						<div
							className="not"
							onClick={() => setModalActive(false)}
						>
							Нет
						</div>
					</div>
				</div>
			</Modal>
			<div 
				className="delete"
				onClick={handleMoadlDeletUser}
			>
				Удалить анкету
			</div>
		</div>
	)
}

export default UserTuning
