import { IconFileDownload } from '@tabler/icons';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { format as formatDate } from 'date-fns'

const reportTypeMap = {
    "CUSTOMER_INVOICE": "Invoice"
}

const statusMap = {
    "IN_PROGRESS": "In Progress",
    "SUCCESS": "Success",
    "FAILED": "Failed"
}

export const columns = (props) => {
    const { handleDownloadFile } = props;
    return [
        { 
            field: 'reportType', 
            headerName: 'Report Type', 
            flex: 1,
            valueGetter: (params) => reportTypeMap[params.row.reportType]
        },
        { 
            field: 'status', 
            headerName: 'Status', 
            flex: 1,
            valueGetter: (params) => statusMap[params.row.status]
        },
        { 
            field: 'fileName', 
            headerName: 'File Name', 
            flex: 2,
        },
        {
            field: 'createdTimestamp',
            headerName: 'Create Time',
            flex: 1,
            valueGetter: (params) => formatDate(new Date(params.row.createdTimestamp + " UTC"), 'yyyy-MM-dd HH:mm:ss')
        },
        {
            field: 'actions',
            type: 'actions',
            flex: 1,
            getActions: (params) => [
              <GridActionsCellItem icon={<IconFileDownload/>} onClick={(e) => handleDownloadFile(params.row)} label="Download File" />
            ]
        }
    ]
}