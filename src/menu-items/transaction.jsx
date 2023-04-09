// assets
import { IconTruckDelivery, IconFileInvoice, IconFileAnalytics } from '@tabler/icons';

// icons
const icons = {
    IconTruckDelivery, IconFileInvoice, IconFileAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const tracking = {
    id: 'group-transaction',
    title: '',
    type: 'group',
    children: [
        {
            id: 'tracking',
            title: 'Tracking',
            type: 'item',
            url: '/tracking',
            icon: icons.IconTruckDelivery,
            breadcrumbs: false
        },
        // {
        //     id: 'invoice',
        //     title: 'Invoice',
        //     type: 'item',
        //     url: '/invoice',
        //     icon: icons.IconFileInvoice,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'report',
        //     title: 'Report',
        //     type: 'item',
        //     url: '/report',
        //     icon: icons.IconFileAnalytics,
        //     breadcrumbs: false
        // }
    ]
};

export default tracking;
