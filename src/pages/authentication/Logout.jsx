import { Grid, Stack, Typography } from '@mui/material';
import AuthWrapper from './AuthWrapper';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '@src/store/actions/auth';
import { useEffect } from 'react';

// ================================|| LOGIN ||================================ //

const Logout = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout()).then(() => {
            navigate("/login");
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    }, [])
    
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Logging out...</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </AuthWrapper>
    )
};

export default Logout;
