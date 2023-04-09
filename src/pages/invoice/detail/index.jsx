import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from '@src/components/MainCard';
import ComponentSkeleton from '@src/pages/components-overview/ComponentSkeleton';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { InvoiceService } from '@src/services/index';
import Detail from './Detail';

const TrackingDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log("Tracking ID, ", id);
        InvoiceService.get(id).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <>
            <ComponentSkeleton>
                <Stack>
                    <MainCard title="Invoice Detail">
                        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                            <Grid item xs={12}>
                                <Detail data={data}/>
                            </Grid>
                        </Grid>
                    </MainCard>
                </Stack>
            </ComponentSkeleton>
        </>
    )
};

export default TrackingDetail;
