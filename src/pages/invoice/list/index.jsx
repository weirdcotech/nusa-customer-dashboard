import { Modal, Box, Stack, Typography } from '@mui/material';

// project import
import MainCard from '@src/components/MainCard';
import ComponentSkeleton from '@src/pages/components-overview/ComponentSkeleton';
import { useEffect, useState } from 'react';
import Table from './Table';
import PaymentHistory from './PaymentHistory';
import { InvoiceService, ReportService } from '@src/services/index';
import { modalStyle } from '@src/assets/styles/customStyles';
import SearchBox from './SearchBox';
import { format as formatDate } from 'date-fns'
import { toastSuccess, toastError } from '@src/components/mytoast';

const List = () => {
    const [filter, setFilter] = useState({
        dueDateFrom: null,
        dueDateTo: null
    });
    const [data, setData] = useState([])
    const [paymentHistory, setPaymentHistory] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleChange = (e) => {
        console.log(e);
        setFilter({
            ...filter,
            [e.target.id]: e.target.value
        })
    }

    const handleSearch = () => {
        if (filter.dueDateFrom) {
            if (!filter.dueDateTo) {
                filter.dueDateTo = filter.dueDateFrom;
                setFilter({
                    ...filter,
                    dueDateTo: filter.dueDateFrom
                })
            }
        }

        if (filter.dueDateTo) {
            if (!filter.dueDateFrom) {
                filter.dueDateFrom = filter.dueDateTo;
                setFilter({
                    ...filter,
                    dueDateFrom: filter.dueDateTo
                })
            }
        }

        if (filter.dueDateFrom) {
            console.log(formatDate(new Date(filter.dueDateFrom), 'yyyy-MM-dd'))
        }

        if (filter.dueDateTo) {
            console.log(formatDate(new Date(filter.dueDateTo), 'yyyy-MM-dd'))
        }

        console.log(filter);

        getList();
    }

    const openPaymentHistory = (id) => {
        console.log("Open payment history: ", id);
        InvoiceService.paymentHistory(id).then((res) => {
            console.log(res.data);
            var theHistory = [];
            for (var i=0; i<res.data.data.length; i++) {
                theHistory.push({
                    id: i,
                    ...res.data.data[i]
                })
            }
            setPaymentHistory({
                data: theHistory,
                rowCount: res.data.rowCount
            });
            setOpenModal(true);
        }).catch((err) => {
            console.log(err);
            toastError(err?.response?.data?.message || "Failed to get payment history. Please try again later.")
        });
    }

    const handleGenerateReport = (id) => {
        ReportService.create({
            "filter": {
                "invoiceId": id
            },
            "reportType": "CUSTOMER_INVOICE",
            "fileName": "Invoice_" + id
        }).then((res) => {
            console.log(res);
            toastSuccess('Invoice file generated successfuly. Please check out on Report Page.')
        }).catch((err) => {
            console.log(err);
            toastError(err?.response?.data?.message || "Failed to generate invoice file. Please try again later.")
        });
    }

    useEffect(() => {
        getList();
    }, [])

    const getList = () => {
        setIsLoading(true);
        InvoiceService.getAll({
            startDueDate: filter.dueDateFrom ? formatDate(new Date(filter.dueDateFrom), 'yyyy-MM-dd') : null,
            endDueDate: filter.dueDateTo ? formatDate(new Date(filter.dueDateTo), 'yyyy-MM-dd') : null
        }).then((res) => {
            var data = res.data;
            console.log(data.data);
            setData(data);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            console.log(err);
            toastError(err?.response?.data?.message || "Failed to get invoice list. Please try again later.")
        });
    }

    return (
        <>
            <ComponentSkeleton>
                <Stack>
                    <MainCard title="Invoice">
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
                                    openPaymentHistory={openPaymentHistory}
                                    handleGenerateReport={handleGenerateReport}
                                />
                            }
                        </Stack>
                    </MainCard>
                </Stack>
            </ComponentSkeleton>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h4">
                        Payment History
                    </Typography>
                    {paymentHistory.data &&
                        <PaymentHistory
                            data={paymentHistory?.data}
                            rowCount={paymentHistory?.rowCount}
                        />
                    }
                </Box>
            </Modal>
        </>
    )
};

export default List;
