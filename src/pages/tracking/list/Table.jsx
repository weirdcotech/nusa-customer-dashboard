import CustomDataGrid from '@src/components/CustomDataGrid';

import { columns } from "./columns";

const Table = ({data, onPageChange, onPageSizeChange, page, pageSize, rowCount}) => {
    return (
        <>
            <CustomDataGrid
                rows={data}
                columns={columns}
                rowCount={rowCount}
                onPageChange={onPageChange}
                onPageSizeChange={onPageSizeChange}
                page={page}
                pageSize={pageSize}
            />
        </>
    )
}

export default Table;