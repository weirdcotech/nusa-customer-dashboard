import { EyeOutlined } from '@ant-design/icons';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material'

const statusMapping = {
    "RECEIVED_AT_ORIGIN": "Received at Origin",
    "ESTIMATION_TIME_DEPARTURE": "Estimated Time Departure",
    "ACTUAL_TIME_DEPARTURE": "Actual Time Departure",
    "ESTIMATION_TIME_ARRIVAL": "Estimated Time Arrival",
    "ARRIVED_AT_DESTINATION": "Arrived at Destination",
    "SHIPPING_TO_CUSTOMER": "Shipping to Customer",
    "COMPLETED": "Completed"
}

export const columns = [
    { 
        field: 'receiptNumber', 
        headerName: 'Receipt Number', 
        flex: 1,
    },
    {
        field: 'actions',
        type: 'actions',
        getActions: (params) => [
            <Link color="secondary" component={RouterLink} to={`/tracking/${params.row.receiptNumber}`}>See Details</Link>
        ]
    }
];