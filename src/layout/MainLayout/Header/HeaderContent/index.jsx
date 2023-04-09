// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import Title from './Title';
import Profile from './Profile';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            {!matchesXs && <Title />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
