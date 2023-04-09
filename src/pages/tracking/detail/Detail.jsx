import {
    List,
    ListItemButton,
    ListItemText,
    Typography
} from '@mui/material';
import MainCard from '@src/components/MainCard';
import { useState } from 'react';
import { useEffect } from 'react';

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
    const [localReceiptNo, setLocalReceiptNo] = useState('')
    useEffect(() => {
        let localReceiptNumberJoin = data?.localReceiptNumber.map(x => x.receiptNumber).join(", ")
        setLocalReceiptNo(localReceiptNumberJoin)
    }, data)
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
                            primary={<Typography variant="subtitle1">{data?.receiptNumber}</Typography>} 
                            secondary="Receipt Number" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.markingCode}</Typography>} 
                            secondary="Marking Code" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{localReceiptNo}</Typography>} 
                            secondary="Local Receipt Number" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.destinationName}</Typography>} 
                            secondary="Customer Name" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.transportationType}</Typography>} 
                            secondary="Transportation Type" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.createdDate}</Typography>} 
                            secondary="Create Date" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.destinationAddress}</Typography>} 
                            secondary="Customer Address" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.packageQuantity}</Typography>} 
                            secondary="Package Quantity" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.weight}Kg</Typography>} 
                            secondary="Weight" />
                    </ListItemButton>
                    <ListItemButton divider>
                        <ListItemText 
                            primary={<Typography variant="subtitle1">{data?.packageVolume}m3</Typography>} 
                            secondary="Volume" />
                    </ListItemButton>
                </List>
            </MainCard>
        </>
    )
}

export default Detail;