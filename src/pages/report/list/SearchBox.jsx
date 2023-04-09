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
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        id="status"
                        name="status"
                        value={filter?.status}
                        label="Status"
                        onChange={handleChange}>
                        <MenuItem value={"-"}>Please Choose</MenuItem>
                        <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
                        <MenuItem value={"SUCCESS"}>Success</MenuItem>
                        <MenuItem value={"FAILED"}>Failed</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="reportType">Report Type</InputLabel>
                    <Select
                        id="reportType"
                        name="reportType"
                        value={filter?.reportType}
                        label="Report Type"
                        onChange={handleChange}>
                        <MenuItem value={"-"}>Please Choose</MenuItem>
                        <MenuItem value={"CUSTOMER_INVOICE"}>Invoice</MenuItem>
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