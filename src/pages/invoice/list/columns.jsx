import { IconEye, IconListDetails, IconFileExport } from '@tabler/icons';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { format as currencyFormatter} from 'currency-formatter';

export const columns = (props) => {
    const { openPaymentHistory, handleGenerateReport } = props;
    return [
        { 
            field: 'invoiceNo', 
            headerName: 'Invoice Number', 
            flex: 1,
        },
        { 
            field: 'orderNumber', 
            headerName: 'Order Number', 
            flex: 1,
        },
        { 
            field: 'trackingNumber', 
            headerName: 'Tracking Number', 
            flex: 1,
        },
        { 
            field: 'totalPrice', 
            headerName: 'Total Payment', 
            type: 'number',
            valueGetter: (params) => currencyFormatter(params.row.totalPrice, {locale: 'id-ID'}),
            flex: 1,
        },
        {
            field: 'remaining',
            headerName: 'Remaining Payment',
            type: 'number',
            valueGetter: (params) => currencyFormatter(params.row.remaining, {locale: 'id-ID'}),
            flex: 1,
        },
        {
            field: 'dueDate',
            headerName: 'Due Date',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Invoice Status',
            flex: 1,
        },
        {
            field: 'paymentStatus',
            headerName: 'Payment Status',
            flex: 1,
        },
        {
            field: 'actions',
            type: 'actions',
            flex: 1,
            getActions: (params) => [
              <GridActionsCellItem icon={<IconEye/>} component={Link} to={`/invoice/${params.row.id}`} label="Detail" />,
              <GridActionsCellItem icon={<IconListDetails/>} onClick={(e) => openPaymentHistory(params.row.id)} label="Payment History" />,
              <GridActionsCellItem icon={<IconFileExport/>} onClick={(e) => handleGenerateReport(params.row.id)} label="Generate Invoice" />
            ]
        }
    ]
}