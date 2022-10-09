import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
    { title: 'kanye west' },
    { title: 'drill beats' },
    { title: 'mumble' },
    { title: 'hard' },
    { title: 'pop' },
];

const Search = () => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            if (active) {
                setOptions([...topFilms]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Paper p={2} >
            <Container  >
                <Autocomplete
                    sx={{ width: 300 }}
                    open={open}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    size='small'
                    isOptionEqualToValue={(option, value) => option.title === value.title}
                    getOptionLabel={(option) => option.title}
                    options={options}
                    loading={loading}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search ... "
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </Container>

        </Paper>

    );

}


export default Search
