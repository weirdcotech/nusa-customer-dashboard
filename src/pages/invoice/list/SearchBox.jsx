// material-ui
import {
    OutlinedInput,
    Stack,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    TextField
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchBox = ({handleSearch, handleChange, filter, isLoading}) => {
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }

    return (
        <>
            <Stack spacing={1} direction="row" style={{marginBottom: '20px', marginTop: '10px'}}>
                <FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Due Date From"
                            value={filter.dueDateFrom}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(newValue) => {
                                let res = {
                                    target: {
                                        id: 'dueDateFrom',
                                        value: newValue
                                    }
                                }
                                handleChange(res);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Due Date To"
                            value={filter.dueDateTo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(newValue) => {
                                let res = {
                                    target: {
                                        id: 'dueDateTo',
                                        value: newValue
                                    }
                                }
                                handleChange(res);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
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