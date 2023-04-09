// material-ui
import {
    OutlinedInput,
    Stack,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
} from '@mui/material';

const SearchBox = ({handleSearch, handleChange, filter, isLoading}) => {
    return (
        <>
            <Stack spacing={1} direction="row" style={{marginBottom: '20px', marginTop: '10px'}}>
                <FormControl>
                    <InputLabel id="receiptNumberLabel">Receipt Number</InputLabel>
                    <OutlinedInput
                        id="receiptNumber"
                        type="text"
                        value={filter.receiptNumber}
                        name="receiptNumber"
                        onChange={handleChange}
                        placeholder="Enter your tracking number here..."
                        style={{width: '300px'}}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel id="deliveryStatusLabel">Status</InputLabel>
                    <Select
                        id="deliveryStatus"
                        name="deliveryStatus"
                        value={filter.deliveryStatus}
                        label="Delivery Status"
                        onChange={handleChange}>
                        <MenuItem value={"-"}>Please Choose</MenuItem>
                        <MenuItem value={"RECEIVED_AT_ORIGIN"}>Received at Origin</MenuItem>
                        <MenuItem value={"ESTIMATION_TIME_DEPARTURE"}>Estimated Time Departure</MenuItem>
                        <MenuItem value={"ACTUAL_TIME_DEPARTURE"}>Actual Time Departure</MenuItem>
                        <MenuItem value={"ESTIMATION_TIME_ARRIVAL"}>Estimated Time Arrival</MenuItem>
                        <MenuItem value={"ARRIVED_AT_DESTINATION"}>Arrived at Destination</MenuItem>
                        <MenuItem value={"SHIPPING_TO_CUSTOMER"}>Shipping to Customer</MenuItem>
                        <MenuItem value={"COMPLETED"}>Completed</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    color="primary"
                    onClick={handleSearch}
                    loading={isLoading}
                    loadingPosition="start"
                    variant="contained"
                >
                    Search
                </Button>
            </Stack>
        </>
    )
}

export default SearchBox;