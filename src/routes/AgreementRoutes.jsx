import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from '@src/components/Loadable';
import MinimalLayout from '@src/layout/MinimalLayout';

// render - login
const AuthAgreement = Loadable(lazy(() => import('@src/pages/authentication/Agreement')));
const AuthLogin = Loadable(lazy(() => import('@src/pages/authentication/Login')));
const AuthLogout = Loadable(lazy(() => import('@src/pages/authentication/Logout')));

// ==============================|| AUTH ROUTING ||============================== //

const AgreementRoutes = () => {
    return {
        path: '/',
        element: <MinimalLayout/>,
        children: [
            {
                path: 'agreement',
                element: <AuthAgreement />
            }
        ]
    };
};

export default AgreementRoutes;
