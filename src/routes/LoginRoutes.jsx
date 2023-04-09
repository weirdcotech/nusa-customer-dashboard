import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from '@src/components/Loadable';
import MinimalLayout from '@src/layout/MinimalLayout';

// render - login

const AuthLogin = Loadable(lazy(() => import('@src/pages/authentication/Login')));
const AuthLogout = Loadable(lazy(() => import('@src/pages/authentication/Logout')));

// ==============================|| AUTH ROUTING ||============================== //

const getElement = (isLoggedIn, isEligible) => {
    if (isLoggedIn) {
        console.log("main route: is logged in")
        if (isEligible) {
            return <Navigate to="/tracking" />
        } else {
            return <Navigate to="/agreement" />
        }
    } else {
        return <MinimalLayout />
    }
}
const LoginRoutes = (isLoggedIn, isEligible) => {
    return {
        path: '/',
        element: !isLoggedIn ? <MinimalLayout /> : <Navigate to="/tracking" />,
        children: [
            {
                path: 'login',
                element: <AuthLogin />
            },
            {
                path: 'logout',
                element: <AuthLogout />
            }
        ]
    };
};

export default LoginRoutes;
