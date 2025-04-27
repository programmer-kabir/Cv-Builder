import { useAuthStore } from '../store/useAuthStore'
import { Navigate } from 'react-router'

const PrivateRoute = ({ children }) => {
  const token = useAuthStore(state => state.token)

  return token ? children : <Navigate to='/login' replace />
}

export default PrivateRoute
