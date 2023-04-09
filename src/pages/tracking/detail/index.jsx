import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from '@src/components/MainCard';
import ComponentSkeleton from '@src/pages/components-overview/ComponentSkeleton';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { TrackingService } from '@src/services/index';
import Detail from './Detail';
import History from './History';

const TrackingDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log("Tracking ID, ", id);
        TrackingService.history(id).then((res) => {
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
                    <MainCard title="Tracking Status">
                        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Detail data={data?.customerPackage}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <History data={data?.histories} />
                            </Grid>
                        </Grid>
                    </MainCard>
                </Stack>
            </ComponentSkeleton>
        </>
    )
};

export default TrackingDetail;
