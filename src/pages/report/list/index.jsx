import { Modal, Box, Stack, Typography } from '@mui/material';

// project import
import MainCard from '@src/components/MainCard';
import ComponentSkeleton from '@src/pages/components-overview/ComponentSkeleton';
import { useEffect, useState } from 'react';
import Table from './Table';
import { ReportService, FileService } from '@src/services/index';
import SearchBox from './SearchBox';
import { format as formatDate } from 'date-fns'
import { toastSuccess, toastError } from '@src/components/mytoast';

const List = () => {
    const [filter, setFilter] = useState({
        reportType: '-',
        status: '-'
    });
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        console.log(e);
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    }

    const handleSearch = () => {
        getList();
    }

    const handleDownloadFile = (row) => {
        console.log(row);
        var url = `/file/${row.fileRepoId}`;
        FileService.download(url).then((res) => {
            console.log(res);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", row.fileName);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }).catch((err) => {
            console.log(err);
            toastError(err?.response?.data?.message || "Download attachment error, please try again later ")
        });
    }

    useEffect(() => {
        getList();
    }, [])

    const getList = () => {
        setIsLoading(true);
        ReportService.getAll({
            reportType: filter.reportType && filter.reportType?.trim() != "-" ? filter.reportType : null,
            status: filter.status && filter.status?.trim() != "-" ? filter.status : null
        }).then((res) => {
            var data = res.data;
            setData(data);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            console.log(err);
            toastError(err?.response?.data?.message || "Failed to get report list. Please try again later.")
        });
    }

    return (
        <>
            <ComponentSkeleton>
                <Stack>
                    <MainCard title="Report">
                        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
                            <SearchBox
                                handleSearch={handleSearch} 
                                handleChange={handleChange} 
                                filter={filter} 
                                isLoading={isLoading}
                            />
                            {isLoading &&
                                <p>Loading....</p>
                            }
                            {data && (data.data != null || data.data != undefined) &&
                                <Table 
                                    data={data?.data}
                                    rowCount={data?.rowCount}
                                    handleDownloadFile={handleDownloadFile}
                                />
                            }
                        </Stack>
                    </MainCard>
                </Stack>
            </ComponentSkeleton>
        </>
    )
};

export default List;
