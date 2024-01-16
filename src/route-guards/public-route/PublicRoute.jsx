import { Navigate, Outlet } from 'react-router-dom'

import { ROUTE_HOME } from '../../utilities/constants/routeNames'


const PublicRoute = () => {
    const accessToken = false
    return accessToken ? <Navigate to={ROUTE_HOME} /> : <Outlet />
}

export default PublicRoute