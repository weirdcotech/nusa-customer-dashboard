import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from '@src/components/MainCard';
import ComponentSkeleton from '@src/pages/components-overview/ComponentSkeleton';
import { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import Table from './Table';
import { TrackingService } from '@src/services/index';
import { toastError } from '@src/components/mytoast';

const Tracking = () => {
    const [filter, setFilter] = useState({
        receiptNumber: null,
        deliveryStatus: '-'
    });
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [rowCount, setRowCount] = useState(0);

    const handleChange = (e) => {
        console.log(e);
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    }

    const handleSearch = () => {
        console.log("Handle search");
        getTrackingList();
    }

    useEffect(() => {
        getTrackingList();
    }, [page, pageSize])

    const getTrackingList = () => {
        setIsLoading(true);
        var body = {
            receiptNumber: (filter.receiptNumber && filter.receiptNumber.trim() != "") ? filter.receiptNumber : null,
            deliveryStatus: (filter.deliveryStatus && filter.deliveryStatus.trim() != "-") ? filter.deliveryStatus : null,
        };
        let offset = (page * pageSize)
        console.log(body);
        TrackingService.getAll(body, offset, pageSize).then((res) => {
            var data = res.data.data ?? [];
            var rowCount = res.data.rowCount ?? 0;
            setData(data);
            setRowCount(rowCount)
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            console.log(err);
            toastError(err?.response?.data?.message || "Failed to get tracking list. Please try again later.")
        });
    }

    return (
        <>
            <ComponentSkeleton>
                <Stack>
                    <MainCard title="Package Tracking">
                        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
                            <SearchBox
                                handleSearch={handleSearch} 
                                handleChange={handleChange} 
                                filter={filter} 
                                isLoading={isLoading}
                            />
                            <Table 
                                data={data} 
                                rowCount={rowCount}
                                onPageChange={(newPage) => setPage(newPage)}
                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                page={page}
                                pageSize={pageSize}
                            />
                        </Stack>
                    </MainCard>
                </Stack>
            </ComponentSkeleton>
        </>
    )
};

export default Tracking;
