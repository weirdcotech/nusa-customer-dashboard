import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import MainCard from '@src/components/MainCard';
import { format as currencyFormatter} from 'currency-formatter';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

const Detail = ({data}) => {
    return (
        <>
            <MainCard content={false}>
                <List
                    component="nav"
                    sx={{
                        px: 0,
                        py: 0,
                        '& .MuiListItemButton-root': {
                            py: 1.5,
                            '& .MuiAvatar-root': avatarSX,
                            '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                        }
                    }}
                >
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.invoiceNo}</Typography>} 
                            secondary="Invoice Number" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.trackingNumber}</Typography>} 
                            secondary="Tracking Number" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.orderNumber}</Typography>} 
                            secondary="Order Number" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{currencyFormatter(data?.totalPrice, {locale: 'id-ID'})}</Typography>} 
                            secondary="Total Payment" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{currencyFormatter(data?.remaining, {locale: 'id-ID'})}</Typography>} 
                            secondary="Remaining Payment" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.status}</Typography>} 
                            secondary="Invoice Status" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.paymentStatus}</Typography>} 
                            secondary="Payment Status" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.markingCode}</Typography>} 
                            secondary="Marking Code" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.localReceiptNumbers?.join(",")}</Typography>} 
                            secondary="Local Receipt Number" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.destination}</Typography>} 
                            secondary="Destination" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.description}</Typography>} 
                            secondary="Description" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.accountNumber}</Typography>} 
                            secondary="Account Number" />
                    </ListItemButton>
                </List>
            </MainCard>
        </>
    )
}

export default Detail;