import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/auth/slice'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const location = useLocation()

	return isLoggedIn ? children : <Navigate to='/login' state={{ from: location }} />
}

export default PrivateRoute
