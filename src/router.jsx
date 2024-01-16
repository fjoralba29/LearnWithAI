import { createBrowserRouter } from 'react-router-dom'
import PrivateLayout from './layouts/private-layout/PrivateLayout.jsx'
//import PublicLayout from '@/layouts/public-layout/PublicLayout.jsx'
import PublicLayout from './layouts/public-layout/PublicLayout'
import * as pages from './pages'
import PrivateRoute from './route-guards/private-route/PrivateRoute.jsx'
import PublicRoute from './route-guards/public-route/PublicRoute.jsx'
import * as routeNames from '../src/utilities/constants'

const router = createBrowserRouter(
    [
        {
            element: <PrivateRoute />, // authenticated user layout route
            children: [
                {
                    element: <PrivateLayout/>,
                    children: [
                        {
                            exact: true,
                            path: routeNames.ROUTE_HOME,
                            element: <pages.Home />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_MATH,
                            element: <pages.MathPage />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_MATH_LESSON,
                            element: <pages.MathLesson />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_GEO,
                            element: <pages.Geo />,
                        },
                    ],
                },
            ],
        },
        {
            element: <PublicRoute />, // anonymous user layout route
            children: [
                {
                    element: <PublicLayout />,
                    children: [
                        {
                            exact: true,
                            path: routeNames.ROUTE_LOGIN,
                            element: <pages.Login />,
                        },
                    ],
                },
            ],
        },
    ],
    {
        basename: '/',
    }
)

export default router