import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import ChangePasswordForm from '../authentication/auth-forms/ChangePasswordForm';
import MainCard from '@src/components/MainCard';

// ================================|| LOGIN ||================================ //

const ChangePassword = () => (
    <MainCard title="Change Password">
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <ChangePasswordForm />
            </Grid>
        </Grid>
    </MainCard>
);

export default ChangePassword;
