import { Stack, Box, Grid, TextField, Paper, Typography, Switch, List } from "@mui/material";
import { Container } from "@mui/system";
import ArtistHeader from "../../components/ArtistHeader/artist-header.component";
import BeatItem from "../../components/BeatItem/beat-item.component";
import { data } from "../../data/data";


const Settings = () => {
    return(
        <Box sx={{ minHeight: '100vh' }} m={0} flex={4} p={2}  >
            <ArtistHeader cover={data.playlist[1]} title={"Pop Beats"} />
            <List>
                {
                    data.pop.map(e => (
                        <BeatItem title={e} key={e} />
                    ))
                }
            </List>
        </Box>
    )
}

export default Settings;

