import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
	const { currentUser, logOut } = UserAuth()

	const handleLogout = async () => {
		try {
			await logOut()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='navbar bg-neutral text-neutral-content fixed z-10'>
			<div className='containerWrap flex justify-between'>
				<a className='btn btn-ghost normal-case text-xl'>JaxxConnect</a>
				{currentUser ? <button onClick={handleLogout}>Cerrar sesión</button> : ''}
			</div>
		</div>
	)
}

export default Navbar
