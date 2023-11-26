import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'

const SendMessage = () => {
	const [value, setValue] = useState('')
	const { currentUser } = UserAuth()

	const handleSendMessage = async (e) => {
		e.preventDefault()

		if (value.trim() === '') {
			alert('No puedes enviar un mensaje vacío')
			return
		}

		try {
			const { uid, displayName, photoURL } = currentUser
			await addDoc(collection(db, 'messages'), {
				text: value,
				name: displayName,
				avatar: photoURL,
				createdAt: serverTimestamp(),
				uid,
			})
		} catch (error) {
			console.log(error)
		}
		console.log(value)
		setValue('')
	}

	return (
		<div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
			<form
				className='containerWrap flex px-2'
				onSubmit={handleSendMessage}
			>
				<input
					className='input w-full focus:outline-none bg-gray-100 rounded-r-none'
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button
					type='submit'
					className='w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm'
				>
					Enviar
				</button>
			</form>
		</div>
	)
}

export default SendMessage
