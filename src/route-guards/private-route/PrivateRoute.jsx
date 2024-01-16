import { Navigate, Outlet } from 'react-router-dom'

import { ROUTE_LOGIN } from '../../utilities/constants/routeNames'


const PrivateRoute = () => {
    const accessToken = true
    return accessToken ? <Outlet /> : <Navigate to={ROUTE_LOGIN} />
}

export default PrivateRoute