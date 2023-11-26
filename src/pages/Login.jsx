import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
	const navigate = useNavigate()
	const { currentUser, signInWithGoogle } = UserAuth()

	const handleLogin = async () => {
		try {
			await signInWithGoogle()
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (currentUser) {
			navigate('/chat')
		}
	}, [currentUser])

	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-5xl font-bold'>Hola, qué tal ✌🏼</h1>
					<p className='py-6'>
						Inicia una nueva conversación con personitas cool, conoce a gente y disfruta de lo que hay en la vida 💜
					</p>
					<button
						onClick={handleLogin}
						className='btn'
					>
						Inicia sesión con Google
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
