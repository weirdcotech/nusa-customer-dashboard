import { format as currencyFormatter} from 'currency-formatter';
import { padStart } from 'lodash';

export const columnsPaymentHistory = [
    { 
        field: 'createdTimestamp', 
        headerName: 'Create Date', 
        flex: 1,
        valueGetter: (params) => {
            var date = new Date(params.row.createdTimestamp + " UTC");
            var fDate = padStart(date.getDate(), 2, '0') + "-" + padStart(date.getMonth()+1, 2, '0') + "-"+ date.getFullYear()
            fDate += ' ' + padStart(date.getHours(), 2, '0') + ":" + padStart(date.getMinutes(), 2, '0') + ":" + padStart(date.getSeconds(), 2, '0')
            return fDate;
        }
    },
    { 
        field: 'amount', 
        headerName: 'Payment Amount', 
        type: 'number',
        valueGetter: (params) => currencyFormatter(params.row.amount, {locale: 'id-ID'}),
        flex: 1,
    },
    {
        field: 'remaining',
        headerName: 'Remaining Payment',
        type: 'number',
        valueGetter: (params) => currencyFormatter(params.row.remaining, {locale: 'id-ID'}),
        flex: 1,
    }
]