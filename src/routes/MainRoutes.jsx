import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from '@src/components/Loadable';
import MainLayout from '@src/layout/MainLayout';

// render - tracking
const TrackingList = Loadable(lazy(() => import('@src/pages/tracking/list')));
const TrackingDetail = Loadable(lazy(() => import('@src/pages/tracking/detail')));
const InvoiceList = Loadable(lazy(() => import('@src/pages/invoice/list')));
const InvoiceDetail = Loadable(lazy(() => import('@src/pages/invoice/detail')));
const ChangePassword = Loadable(lazy(() => import('@src/pages/change-password')));
const ReportList = Loadable(lazy(() => import('@src/pages/report/list')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('@src/pages/dashboard')));
const SamplePage = Loadable(lazy(() => import('@src/pages/extra-pages/SamplePage')));
const Typography = Loadable(lazy(() => import('@src/pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('@src/pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('@src/pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('@src/pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const getElement = (isLoggedIn, isEligible) => {
    if (isLoggedIn) {
        console.log("main route: is logged in")
        if (isEligible) {
            console.log("main route: is eligible")
            return <MainLayout />;
        } else {
            console.log("main route: not eligible")
            return <Navigate to="/agreement" />;
        }
    } else {
        console.log("main route: not logged in")
        return <Navigate to="/login" />;
    }
}
const MainRoutes = (isLoggedIn, isEligible) => {
    return {
        path: '/',
        element: getElement(isLoggedIn, isEligible),
        children: [
            {
                path: '',
                element: <TrackingList />
            },
            {
                path: 'change-password',
                element: <ChangePassword />
            },
            {
                path: 'tracking',
                element: <TrackingList />
            },
            {
                path: 'tracking/:id',
                element: <TrackingDetail />
            },
            // {
            //     path: 'invoice',
            //     element: <InvoiceList />
            // },
            // {
            //     path: 'invoice/:id',
            //     element: <InvoiceDetail />
            // },
            // {
            //     path: 'report',
            //     element: <ReportList />
            // },
            {
                path: 'dashboard',
                children: [
                    {
                        path: 'default',
                        element: <DashboardDefault />
                    }
                ]
            },
            {
                path: 'sample-page',
                element: <SamplePage />
            },
            {
                path: 'shadow',
                element: <Shadow />
            },
            {
                path: 'typography',
                element: <Typography />
            },
            {
                path: 'icons/ant',
                element: <AntIcons />
            }
        ]
    };
};

export default MainRoutes;
