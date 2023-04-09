import { lazy } from 'react';

// project import
import Loadable from '@src/components/Loadable';
import MinimalLayout from '@src/layout/MinimalLayout';

// render - login
const AuthLogout = Loadable(lazy(() => import('@src/pages/authentication/Logout')));

// ==============================|| AUTH ROUTING ||============================== //

const LogoutRoutes = () => {
    return {
        path: '/',
        element: <MinimalLayout />,
        children: [
            {
                path: 'logout',
                element: <AuthLogout />
            }
        ]
    };
};

export default LogoutRoutes;
