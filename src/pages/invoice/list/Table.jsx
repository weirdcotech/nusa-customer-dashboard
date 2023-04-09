import CustomDataGrid from '@src/components/CustomDataGrid';

import { columns } from "./columns";

const Table = ({data, rowCount, openPaymentHistory, handleGenerateReport}) => {
    return (
        <>
            <CustomDataGrid
                rows={data}
                columns={columns({
                    openPaymentHistory: openPaymentHistory, 
                    handleGenerateReport: handleGenerateReport
                })}
                rowCount={rowCount}
            />
        </>
    )
}

export default Table;