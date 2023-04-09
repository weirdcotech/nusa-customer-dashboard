import CustomDataGrid from '@src/components/CustomDataGrid';

import { columns } from "./columns";

const Table = ({data, rowCount, handleDownloadFile}) => {
    return (
        <>
            <CustomDataGrid
                rows={data}
                columns={columns({
                    handleDownloadFile: handleDownloadFile
                })}
                rowCount={rowCount}
            />
        </>
    )
}

export default Table;