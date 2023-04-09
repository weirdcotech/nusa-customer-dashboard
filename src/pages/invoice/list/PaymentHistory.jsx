import CustomDataGrid from '@src/components/CustomDataGrid';

import { columnsPaymentHistory } from "./columnsPaymentHistory";

const PaymentHistory = ({data, rowCount}) => {
    return (
        <>
            <CustomDataGrid
                rows={data}
                columns={columnsPaymentHistory}
                rowCount={rowCount}
            />
        </>
    )
}

export default PaymentHistory;